import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-developers.component').then((m) => m.ForDevelopersPageComponent),
	},
];
