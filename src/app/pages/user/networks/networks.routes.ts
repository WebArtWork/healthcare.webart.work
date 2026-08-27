import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./networks.component').then((m) => m.NetworksComponent),
	},
];
