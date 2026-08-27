import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./properties.component').then((m) => m.PropertiesComponent),
	},
];
