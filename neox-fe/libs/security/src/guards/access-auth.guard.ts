import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { APP_LOGGED_ROUTE_DEFAULT } from '@team-link/common';

import { firstValueFrom } from 'rxjs';
import { AuthenticationService } from '../index';

export const accessAuthGuard: CanActivateFn = async () => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);
  const isLogged = await firstValueFrom(authenticationService.isUserLoggedIn$);

  if (isLogged) {
    router.navigate([APP_LOGGED_ROUTE_DEFAULT]);
    return false;
  }

  return true;
};
