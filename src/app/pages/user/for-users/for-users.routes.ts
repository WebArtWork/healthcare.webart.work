import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-users.component').then((m) => m.ForUsersPageComponent),
	},
];
