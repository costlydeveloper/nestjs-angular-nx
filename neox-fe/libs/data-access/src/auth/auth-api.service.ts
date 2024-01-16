import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RestApiHelper } from '@team-link/data-access-shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  public http = inject(HttpClient);
  public apiHelper = inject(RestApiHelper);

  login(
    username: string,
    password: string
  ): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(
      this.apiHelper.getApiUrl() + '/auth/signin',
      {
        username,
        password,
      }
    );
  }
}
