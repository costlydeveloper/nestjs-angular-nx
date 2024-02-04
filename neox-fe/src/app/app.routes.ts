import { Route } from '@angular/router';
import { APP_ROUTE } from '@team-link/config';
import {
  accessAppLayoutGuard,
  accessAuthGuard,
  accessDevOnlyGuard,
} from '@team-link/utils';
import { AppLayoutComponent } from './app-layout/containers/app-layout/app-layout.component';

export const appRoutes: Route[] = [
  {
    path: APP_ROUTE.AUTHENTICATION,
    canActivate: [accessAuthGuard],
    loadChildren: () => import('@team-link/auth').then((m) => m.authRoutes),
  },
  {
    path: '',
    redirectTo: APP_ROUTE.AUTHENTICATION,
    pathMatch: 'full',
  },
  {
    path: '',
    component: AppLayoutComponent,
    data: { requiresLogin: true },
    canActivate: [accessAppLayoutGuard],
    children: [
      {
        path: APP_ROUTE.DASHBOARD,
        loadChildren: () =>
          import('@team-link/dashboard').then((m) => m.dashboardRoutes),
      },
      {
        path: APP_ROUTE.PLAYGROUND,
        canActivate: [accessDevOnlyGuard],
        loadChildren: () =>
          import('@team-link/dev-playground').then((m) => m.playgroundRoutes),
      },
    ],
  },
  {
    path: '**',
    loadChildren: () => import('@team-link/auth').then((m) => m.authRoutes),
  },
];
