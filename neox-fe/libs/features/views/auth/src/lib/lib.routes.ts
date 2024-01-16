import { Route } from '@angular/router';
import { AUTH_ROUTE } from '@team-link/config';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const authRoutes: Route[] = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: AUTH_ROUTE.SIGN_IN, component: SignInComponent },
      { path: AUTH_ROUTE.SIGN_UP, component: SignUpComponent },
      { path: '', redirectTo: AUTH_ROUTE.SIGN_IN, pathMatch: 'full' },
    ],
  },
];
