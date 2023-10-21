import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private userService: AuthenticationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.userService.getToken();
    if (token) {
      const requestWithToken = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer + ${token}`,
          'Content-Type': 'application/json',
        }),
      });
      return next.handle(requestWithToken);
    }
    return next.handle(request);
  }
}
