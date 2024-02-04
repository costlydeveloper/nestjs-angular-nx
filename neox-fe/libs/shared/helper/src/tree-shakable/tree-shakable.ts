import { APP_ROUTE } from '@team-link/config';
import { IMenuItem, MenuItem } from '@team-link/ui';
import { accessDevOnlyGuard } from '@team-link/utils';

export const treeShakablePlaygroundRoutes = {
  path: APP_ROUTE.PLAYGROUND,
  canActivate: [accessDevOnlyGuard],
  loadChildren: () =>
    import('@team-link/dev-playground').then((m) => m.playgroundRoutes),
};

export function setDevMenuItems(): IMenuItem {
  const item = new MenuItem('app.menu.dev', true, '');
  item.child = [
    new MenuItem(
      'app.menu.dev.formGenerator',
      true,
      APP_ROUTE.PLAYGROUND + '/form',
    ),
    new MenuItem(
      'app.menu.dev.listGenerator',
      true,
      APP_ROUTE.PLAYGROUND + '/list',
    ),
  ];
  return item;
}
