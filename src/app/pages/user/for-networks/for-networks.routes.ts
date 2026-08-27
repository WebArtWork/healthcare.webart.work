import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-networks.component').then((m) => m.ForNetworksPageComponent),
	},
];
