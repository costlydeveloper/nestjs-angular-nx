import { APP_ROUTE } from '@team-link/common';
import { accessDevOnlyGuard } from '@team-link/security';
import { IMenuItem, MenuItem } from '@team-link/ui';

export const treeShakablePlaygroundRoutes = {
  path: APP_ROUTE.PLAYGROUND,
  canActivate: [accessDevOnlyGuard],
  loadChildren: () => import('../../index').then((m) => m.playgroundRoutes),
};

export function setDevMenuItems(): IMenuItem[] {
  const item = new MenuItem('app.menu.dev', true, '');
  item.child = [
    new MenuItem(
      'app.menu.dev.formGenerator',
      true,
      APP_ROUTE.PLAYGROUND + '/form'
    ),
    new MenuItem(
      'app.menu.dev.listGenerator',
      true,
      APP_ROUTE.PLAYGROUND + '/list'
    ),
    new MenuItem(
      'app.menu.dev.fetchApi',
      true,
      APP_ROUTE.PLAYGROUND + '/fetch-api'
    ),
  ];
  return [item];
}
