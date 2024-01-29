import { Route } from '@angular/router';
import { AUTH_ROUTE } from '@team-link/config';
import { AuthComponent } from './auth/auth.component';
import { SmartSignInComponent } from './smart-sign-in/smart-sign-in.component';
import { SmartSignUpComponent } from './smart-sign-up/smart-sign-up.component';

export const authRoutes: Route[] = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: AUTH_ROUTE.SIGN_IN, component: SmartSignInComponent },
      { path: AUTH_ROUTE.SIGN_UP, component: SmartSignUpComponent },
      { path: '', redirectTo: AUTH_ROUTE.SIGN_IN, pathMatch: 'full' },
    ],
  },
];
