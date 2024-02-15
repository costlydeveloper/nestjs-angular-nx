import { Route } from '@angular/router';
import { APP_ROUTE } from '@team-link/common';
import { treeShakablePlaygroundRoutes } from '@team-link/dev-playground';
import { accessAppLayoutGuard, accessAuthGuard } from '@team-link/security';
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
      treeShakablePlaygroundRoutes,
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('@team-link/errors').then((c) => c.NotFoundComponent),
  },
];
