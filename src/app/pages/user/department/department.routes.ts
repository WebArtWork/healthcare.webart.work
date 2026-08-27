import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./department.component').then((m) => m.DepartmentComponent),
	},
];
