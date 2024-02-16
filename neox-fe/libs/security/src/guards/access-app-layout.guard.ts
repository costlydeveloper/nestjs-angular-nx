import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { APP_ROUTE, ROUTE_DATA } from '@team-link/common';

import { firstValueFrom } from 'rxjs';
import { AuthenticationService } from '../auth-service';

export const accessAppLayoutGuard: CanActivateFn = async (route) => {
  const requiresLogin = route.data[ROUTE_DATA.REQUIRES_LOGIN] || false;

  if (requiresLogin) {
    const authenticationService = inject(AuthenticationService);
    const router = inject(Router);
    const isLogged = await firstValueFrom(
      authenticationService.isUserLoggedIn$,
    );

    if (!isLogged) {
      router.navigate([APP_ROUTE.AUTHENTICATION]);
    }
    return isLogged;
  }
  return true;
};
