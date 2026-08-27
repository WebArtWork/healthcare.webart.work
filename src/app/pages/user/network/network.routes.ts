import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./network.component').then((m) => m.NetworkComponent),
	},
];
