import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { APP_LOGGED_ROUTE_DEFAULT } from '@team-link/config';
import { AuthenticationService } from '@team-link/data-access';

import { firstValueFrom } from 'rxjs';

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
