import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Nullable } from '@team-link/common';
import { jwtDecode } from 'jwt-decode';
import { mergeMap, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Tokens } from '../auth-api/schema';
import { AuthenticationService } from '../auth-service';
import { SecurityConfig } from '../config';
import { JwtType } from '../types';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  authenticationService = inject(AuthenticationService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // header X-Skip-Interceptor is useful to avoid global interceptor
    if (request.headers.get('X-Skip-Interceptor')) {
      const modifiedRequest = request.clone({
        headers: request.headers.delete('X-Skip-Interceptor'),
      });
      return next.handle(modifiedRequest);
    }

    const tokens = this.authenticationService.getTokensFromStorage();

    if (tokens) {
      request = this.addTokenToRequest(request, tokens.accessToken);
    }

    if (tokens && this.isTokenReadyForRefreshing(tokens.accessToken)) {
      return this.handlePreventUnauthorizedRequest(request, next, tokens);
    } else {
      return this.handleUnauthorizedRequest(request, next, tokens);
    }
  }

  private addTokenToRequest(
    request: HttpRequest<unknown>,
    token: string
  ): HttpRequest<unknown> {
    return request.clone({
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }),
    });
  }

  private isTokenReadyForRefreshing(token: string): boolean {
    const decodedToken: JwtType = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    return (
      decodedToken.exp <
      currentTime + SecurityConfig.REFRESH_TOKEN_BEFORE_EXPIRE
    );
  }

  private handlePreventUnauthorizedRequest(
    request: HttpRequest<unknown>,
    next: HttpHandler,
    tokens: Tokens
  ): Observable<HttpEvent<unknown>> {
    return this.authenticationService.refreshToken(tokens.refreshToken).pipe(
      mergeMap((newTokens) => {
        return next.handle(
          this.addTokenToRequest(request, newTokens.accessToken)
        );
      }),
      catchError((err) => {
        this.authenticationService.logout();
        return throwError(err);
      })
    );
  }

  private handleUnauthorizedRequest(
    request: HttpRequest<unknown>,
    next: HttpHandler,
    tokens: Nullable<Tokens>
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        // If the response is 401 Unauthorized, try to refresh the token
        if (error.status === 401 && tokens) {
          return this.authenticationService
            .refreshToken(tokens.refreshToken)
            .pipe(
              switchMap((tokens) => {
                // Repeat the original request with the new token
                return next.handle(
                  this.addTokenToRequest(request, tokens.accessToken)
                );
              }),
              catchError((err) => {
                // If the token refresh fails, log the user out
                this.authenticationService.logout();
                return throwError(err);
              })
            );
        }
        return throwError(error);
      })
    );
  }
}
