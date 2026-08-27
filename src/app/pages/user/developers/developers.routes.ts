import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./developers.component').then((m) => m.DevelopersComponent),
	},
];
