import { Route } from '@angular/router';
import { PLAYGROUND_ROUTE } from '@team-link/config';
import { PlayFormComponent } from './play-form/play-form.component';
import { PlayListComponent } from './play-list/play-list.component';
import { PlaygroundComponent } from './playground/playground.component';

export const playgroundRoutes: Route[] = [
  {
    path: '',
    component: PlaygroundComponent,
    children: [
      {
        path: PLAYGROUND_ROUTE.FORM,
        component: PlayFormComponent,
      },
      {
        path: PLAYGROUND_ROUTE.LIST,
        component: PlayListComponent,
      },
    ],
  },
];
