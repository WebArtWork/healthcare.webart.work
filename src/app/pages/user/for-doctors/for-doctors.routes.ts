import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-doctors.component').then((m) => m.ForDoctorsPageComponent),
	},
];
