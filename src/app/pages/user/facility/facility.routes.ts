import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./facility.component').then((m) => m.FacilityComponent),
	},
];
