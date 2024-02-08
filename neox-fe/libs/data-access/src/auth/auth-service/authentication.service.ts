import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { APP_LOGGED_ROUTE_DEFAULT } from '@team-link/config';
import { BehaviorSubject, catchError } from 'rxjs';
import { AuthApiService } from '../../index';

const TOKEN_KEY = 'loginToken';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private isUserLoggedIn = new BehaviorSubject(!!this.getToken());
  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();
  public authApiService = inject(AuthApiService);
  public router = inject(Router);

  checkCredentials(username: string, password: string) {
    this.authApiService
      .login(username, password)
      .pipe(
        catchError((err) => {
          alert(err.message);
          throw err;
        }),
      )
      .subscribe((resp) => {
        if (resp?.accessToken) {
          this.router.navigateByUrl('/' + APP_LOGGED_ROUTE_DEFAULT);
          this.setToken(resp.accessToken);
          this.isUserLoggedIn.next(true);
        }
      });
  }

  logout() {
    this.removeToken();
    this.isUserLoggedIn.next(false);
    this.router.navigateByUrl('/');
  }

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  private setToken(token: string) {
    return localStorage.setItem(TOKEN_KEY, token);
  }

  private removeToken() {
    return localStorage.removeItem(TOKEN_KEY);
  }
}
