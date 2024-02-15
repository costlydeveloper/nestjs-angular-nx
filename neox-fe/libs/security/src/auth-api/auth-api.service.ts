import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@team-link/config';
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
      environment.apiServer + '/auth/signin',
      {
        username,
        password,
      },
    );
  }
}
