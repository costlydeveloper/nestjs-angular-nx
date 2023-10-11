import { inject, Injectable } from '@angular/core';
import { AuthApiService } from '@neox-ui/data-access/auth';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isUserLoggedIn = new BehaviorSubject(false);
  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();
  public authApiService = inject(AuthApiService);

  checkCredentials(username: string, password: string) {
    this.authApiService.login(username, password).subscribe((resp) => {
      if (resp?.accessToken) {
        this.setToken(resp.accessToken);
        this.isUserLoggedIn.next(true);
      }
      console.log('resp', resp.accessToken);
    });
  }

  logout() {
    this.isUserLoggedIn.next(false);
  }

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  setToken(token: string) {
    return localStorage.setItem(TOKEN_KEY, token);
  }

  removeToken() {
    return localStorage.removeItem(TOKEN_KEY);
  }
}
