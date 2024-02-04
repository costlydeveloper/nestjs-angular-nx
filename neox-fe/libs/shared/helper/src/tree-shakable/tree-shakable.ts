import { APP_ROUTE } from '@team-link/config';
import { IMenuItem, MenuItem } from '@team-link/ui';

export const treeShakablePlaygroundRoutes = {
  path: APP_ROUTE.PLAYGROUND,
  loadChildren: () =>
    import('@team-link/playground').then((m) => m.playgroundRoutes),
};

export function setDevMenuItems(): IMenuItem {
  const item = new MenuItem('app.menu.dev', true, '');
  item.child = [
    new MenuItem(
      'app.menu.dev.formGenerator',
      true,
      APP_ROUTE.PLAYGROUND + '/form',
    ),
  ];
  return item;
}
