import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./agency.component').then((m) => m.AgencyComponent),
	},
];
