import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '@neox-ui/data-access/shared';
import { ROUTE_DATA } from '@neox-ui/shared/common';
import { APP_ROUTE } from '@neox-ui/team-link/shared';
import { firstValueFrom } from 'rxjs';

export const accessGuard: CanActivateFn = async (route, state) => {
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
