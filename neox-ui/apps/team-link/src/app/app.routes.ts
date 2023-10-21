import { Route } from '@angular/router';
import { accessGuard } from '@neox-ui/shared/utils';
import { APP_ROUTE } from '@neox-ui/team-link/shared';
import { loadRemoteModule } from '@nx/angular/mf';
import { AppLayoutComponent } from './app-layout/containers/app-layout/app-layout.component';

export const appRoutes: Route[] = [
  {
    path: APP_ROUTE.AUTHENTICATION,
    loadChildren: () =>
      loadRemoteModule(APP_ROUTE.AUTHENTICATION, './Module').then(
        (m) => m.RemoteEntryModule,
      ),
  },
  {
    path: '',
    component: AppLayoutComponent,
    data: { requiresLogin: true },
    canActivate: [accessGuard],
  },
];
