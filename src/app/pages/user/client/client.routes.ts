import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./client.component').then((m) => m.ClientComponent),
	},
];
