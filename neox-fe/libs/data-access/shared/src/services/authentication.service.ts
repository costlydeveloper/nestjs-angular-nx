import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { APP_LOGGED_ROUTE_DEFAULT } from '@team-link/config';
import { AuthApiService } from '@team-link/data-access';
import { BehaviorSubject, catchError } from 'rxjs';

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
        })
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
