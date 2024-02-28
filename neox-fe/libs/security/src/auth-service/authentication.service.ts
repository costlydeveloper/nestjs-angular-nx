import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  APP_LOGGED_ROUTE_DEFAULT,
  LocalStorageService,
  Nullable,
} from '@team-link/common';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthApiService } from '../auth-api';
import { Tokens } from '../auth-api/schema';

const TOKENS_KEY = 'AuthTokens';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private localStorageService = inject(LocalStorageService);
  private isUserLoggedIn = new BehaviorSubject(
    !!this.getAuthTokenFromStorage()
  );
  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();
  public authApiService = inject(AuthApiService);
  public router = inject(Router);

  private handleSignInUp(observable: Observable<Tokens>): void {
    observable
      .pipe(
        catchError((err) => {
          this.errorCase(err.message);
          throw err;
        })
      )
      .subscribe((resp) => {
        if (resp) {
          this.router.navigateByUrl('/' + APP_LOGGED_ROUTE_DEFAULT);
          this.setTokensToStorage(resp);
          this.isUserLoggedIn.next(true);
        }
      });
  }

  signIn(email: string, password: string): void {
    this.handleSignInUp(this.authApiService.signIn(email, password));
  }
  signUp(email: string, password: string): void {
    this.handleSignInUp(this.authApiService.signUp(email, password));
  }

  logout(): void {
    this.removeToken();
    this.isUserLoggedIn.next(false);
    this.router.navigateByUrl('/');
  }

  refreshToken(refreshToken: string): Observable<Tokens> {
    return this.authApiService.refreshTokens(refreshToken).pipe(
      take(1),
      tap((tokens) => {
        this.setTokensToStorage(tokens);
      })
    );
  }

  errorCase(err: string): void {
    //alert(err);
  }

  private setTokensToStorage(tokens: Tokens): void {
    return this.localStorageService.setItem(TOKENS_KEY, tokens);
  }

  getTokensFromStorage(): Nullable<Tokens> {
    return this.localStorageService.getItem<Tokens>(TOKENS_KEY);
  }

  getAuthTokenFromStorage(): Nullable<string> {
    const tokens = this.localStorageService.getItem<Tokens>(TOKENS_KEY);
    return tokens?.accessToken ?? null;
  }

  getRefreshTokenFromStorage(): Nullable<string> {
    const tokens = this.localStorageService.getItem<Tokens>(TOKENS_KEY);
    return tokens?.refreshToken ?? null;
  }

  private removeToken(): void {
    return this.localStorageService.removeItem(TOKENS_KEY);
  }
}
