import {Route} from '@angular/router';

export const appRoutes: Route[] = [
	{
		path        : '',
		loadChildren: () =>
			import('auth/Module').then((m) => m.RemoteEntryModule)
	}
];
