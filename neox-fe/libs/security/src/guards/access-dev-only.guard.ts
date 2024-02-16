import { CanActivateFn } from '@angular/router';
import { environment } from '@team-link/config';

export const accessDevOnlyGuard: CanActivateFn = () => {
  return !environment.production;
};
