import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  CryptographyService,
  MESSAGE,
  validateWithSchema,
} from '@team-link/common';
import { environment } from '@team-link/config';
import { catchError, Observable, throwError } from 'rxjs';
import { Tokens, TokensSchema } from './schema';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  public http = inject(HttpClient);
  public cryptographyService = inject(CryptographyService);

  private handleSignInUp(
    email: string,
    password: string,
    path: 'signup' | 'signin'
  ): Observable<Tokens> {
    password = this.cryptographyService.encryptWithRandomKey(password);
    return this.http
      .post<Tokens>(environment.apiServer + '/auth/' + path, {
        email,
        password,
      })
      .pipe(
        catchError((error) => {
          return throwError(
            () =>
              new Error(
                `${MESSAGE.ERROR.AUTH_NOT_SUCCEED}: ${error.error.message}`
              )
          );
        }),
        validateWithSchema(TokensSchema)
      );
  }
  signIn(email: string, password: string): Observable<Tokens> {
    return this.handleSignInUp(email, password, 'signin');
  }
  signUp(email: string, password: string): Observable<Tokens> {
    return this.handleSignInUp(email, password, 'signup');
  }

  logout(): Observable<boolean> {
    return this.http.post<boolean>(environment.apiServer + '/auth/logout', {});
  }

  refreshTokens(refreshToken: string): Observable<Tokens> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${refreshToken}`,
      'Content-Type': 'application/json',
      'X-Skip-Interceptor': 'true',
    });
    return this.http
      .post<Tokens>(
        environment.apiServer + '/auth/refresh',
        {},
        { headers: headers }
      )
      .pipe(validateWithSchema(TokensSchema));
  }
}
