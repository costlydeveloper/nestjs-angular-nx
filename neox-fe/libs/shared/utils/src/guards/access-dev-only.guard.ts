import { CanActivateFn } from '@angular/router';
import { environmentGlobal } from '@team-link/config';

export const accessDevOnlyGuard: CanActivateFn = () => {
  return !environmentGlobal.production;
};
