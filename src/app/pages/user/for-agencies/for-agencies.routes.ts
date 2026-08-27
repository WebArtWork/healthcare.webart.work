import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-agencies.component').then((m) => m.ForAgenciesPageComponent),
	},
];
