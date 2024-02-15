import { Route } from '@angular/router';
import { PlayFormComponent } from './components/play-form/play-form.component';
import { PlayListComponent } from './components/play-list/play-list.component';
import { PlaygroundComponent } from './components/playground/playground.component';

export const PLAYGROUND_ROUTE = {
  FORM: 'form',
  LIST: 'list',
};

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
