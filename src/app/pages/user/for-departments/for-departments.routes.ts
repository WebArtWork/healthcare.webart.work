import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-departments.component').then((m) => m.ForDepartmentsPageComponent),
	},
];
