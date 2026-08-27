import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./agencies.component').then((m) => m.AgenciesComponent),
	},
];
