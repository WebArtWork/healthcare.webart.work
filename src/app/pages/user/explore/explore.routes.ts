import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./explore.component').then((m) => m.ExploreComponent),
	},
];
