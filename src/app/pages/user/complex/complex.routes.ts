import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./complex.component').then((m) => m.ComplexComponent),
	},
];
