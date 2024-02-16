import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { validateWithSchema } from '@team-link/common';
import { environment } from '@team-link/config';
import { Observable } from 'rxjs';
import { Tokens, TokensSchema } from './schema';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  public http = inject(HttpClient);
  signIn(email: string, password: string): Observable<Tokens> {
    return this.http
      .post<Tokens>(environment.apiServer + '/auth/signin', {
        email,
        password,
      })
      .pipe(validateWithSchema(TokensSchema));
  }
  signUp(email: string, password: string): Observable<Tokens> {
    return this.http
      .post<Tokens>(environment.apiServer + '/auth/signup', {
        email,
        password,
      })
      .pipe(validateWithSchema(TokensSchema));
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
