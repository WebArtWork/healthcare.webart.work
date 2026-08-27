import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./patients.component').then((m) => m.PatientsComponent),
	},
];
