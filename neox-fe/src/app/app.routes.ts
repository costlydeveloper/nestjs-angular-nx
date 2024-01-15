import { Route } from '@angular/router';
import { APP_ROUTE } from '@team-link/config';

export const appRoutes: Route[] = [
	{
		path: APP_ROUTE.AUTHENTICATION,
		loadChildren: () =>
			import('@team-link/auth')
			.then(m => m.authRoutes)
	},

];
