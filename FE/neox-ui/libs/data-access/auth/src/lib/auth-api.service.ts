import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  public http = inject(HttpClient);

  login(
    username: string,
    password: string,
  ): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(
      'http://localhost:3000/auth/login',
      {
        username,
        password,
      },
    );
  }
}
