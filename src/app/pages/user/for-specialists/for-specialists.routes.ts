import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-specialists.component').then((m) => m.ForSpecialistsPageComponent),
	},
];
