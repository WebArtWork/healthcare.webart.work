import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';
import { adminsGuard, authenticatedGuard, guestGuard } from '@wawjs/ngx-bos';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		canActivate: [MetaGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		data: {
			meta: {
				title: 'MedPass — цифровий медичний паспорт',
				description:
					'MedPass показує повну історію лікування пацієнта — діагнози, обстеження, призначення — поруч зі стрічкою прийомів, картою закладів та профілями лікарів.',
			},
		},
		loadChildren: () =>
			import('./pages/guest/home/home.routes').then((m) => m.routes),
	},
	{
		path: '',
		canActivate: [guestGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'sign',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Вхід',
						description:
							'Увійдіть або зареєструйтесь у MedPass, щоб переглядати цифрові медичні паспорти пацієнтів, стрічку прийомів і керувати профілем.',
					},
				},
				loadChildren: () =>
					import('./pages/guest/sign/sign.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: '',
		canActivate: [authenticatedGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'profile',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мій профіль',
						description:
							'Керуйте особистими даними профілю MedPass: ім’я, телефон, фото та коротка інформація про себе.',
					},
				},
				loadChildren: () =>
					import('./pages/user/profile/profile.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'editor',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Редактор',
						description:
							'Перевірте форми додавання пацієнтів, прийомів, закладів, мереж та лікарів у MedPass.',
						index: false,
					},
				},
				loadChildren: () =>
					import('./pages/user/editor/editor.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'share-profile',
				canActivate: [MetaGuard],
				data: {
					shareKind: 'profile',
					meta: {
						title: 'Поділитися профілем',
						description: 'Відскануйте QR-код, щоб відкрити мій профіль MedPass.',
						index: false,
					},
				},
				loadChildren: () =>
					import('./pages/user/share/share.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		// Publicly browsable pages — accessible whether signed in or not.
		path: '',
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'settings',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мої налаштування',
						description: 'Налаштування облікового запису MedPass.',
						index: false,
					},
				},
				loadChildren: () =>
					import('./pages/user/settings/settings.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'feedback',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Відгук',
						description: 'Поділіться відгуком або повідомте про помилку в MedPass.',
						index: false,
					},
				},
				loadChildren: () =>
					import('./pages/user/feedback/feedback.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'share',
				canActivate: [MetaGuard],
				data: {
					shareKind: 'app',
					meta: {
						title: 'Поділитися MedPass',
						description: 'Відскануйте QR-код, щоб приєднатися до MedPass за кілька секунд.',
					},
				},
				loadChildren: () =>
					import('./pages/user/share/share.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для користувачів',
						description: 'Ведіть свою медичну історію та знаходьте перевірених лікарів разом з MedPass.',
					},
				},
				loadChildren: () =>
					import('./pages/user/for-users/for-users.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-doctors',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для лікарів',
						description: 'Розвивайте свою лікарську практику з MedPass.',
					},
				},
				loadChildren: () =>
					import('./pages/user/for-doctors/for-doctors.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-networks',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для мереж',
						description: 'Покажіть свої медичні заклади пацієнтам на MedPass.',
					},
				},
				loadChildren: () =>
					import('./pages/user/for-networks/for-networks.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-departments',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для відділень',
						description: 'Розвивайте своє відділення разом з MedPass.',
					},
				},
				loadChildren: () =>
					import('./pages/user/for-departments/for-departments.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'feed',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Стрічка',
						description:
							'Перегортайте стрічку прийомів і оновлень пацієнтів MedPass — відкладайте важливе в обране, пропускайте зайве.',
					},
				},
				loadChildren: () =>
					import('./pages/user/feed/feed.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'patients',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Пацієнти',
						description:
							'Перегляньте всіх пацієнтів у цифровій медичній картці MedPass.',
					},
				},
				loadChildren: () =>
					import('./pages/user/patients/patients.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'departments',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Відділення',
						description:
							'Перегляньте всі відділення лікарень, представлені в MedPass.',
					},
				},
				loadChildren: () =>
					import('./pages/user/departments/departments.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'networks',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мережі',
						description:
							'Перегляньте всі медичні мережі, представлені в MedPass.',
					},
				},
				loadChildren: () =>
					import('./pages/user/networks/networks.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'explore',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Пошук',
						description:
							'Шукайте й фільтруйте прийоми та записи пацієнтів за типом, датою, статусом і відділенням.',
					},
				},
				loadChildren: () =>
					import('./pages/user/explore/explore.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'map',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Карта',
						description:
							'Знаходьте медичні заклади на карті MedPass за їхнім реальним розташуванням.',
					},
				},
				loadChildren: () =>
					import('./pages/user/map/map.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'patient/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Пацієнт',
						description:
							'Цифрова медична картка пацієнта: показники, повна історія лікування та обстежень, пов’язані призначення.',
					},
				},
				loadChildren: () =>
					import('./pages/user/patient/patient.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'appointment/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Запис на прийом',
						description:
							'Деталі запису на прийом: тип прийому, дата й час, лікар та відділення.',
					},
				},
				loadChildren: () =>
					import('./pages/user/appointment/appointment.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'records/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Запис медичної історії',
						description:
							'Запис з цифрового медичного паспорта пацієнта: діагноз, обстеження або призначення.',
					},
				},
				loadChildren: () =>
					import('./pages/user/records/records.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'facility/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Медичний заклад',
						description:
							'Медичний заклад у MedPass: відділення, мережа та деталі закладу.',
					},
				},
				loadChildren: () =>
					import('./pages/user/facility/facility.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'network/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мережа',
						description:
							'Профіль медичної мережі в MedPass: заклади та відділення.',
					},
				},
				loadChildren: () =>
					import('./pages/user/network/network.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'department/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Відділення',
						description:
							'Профіль відділення лікарні в MedPass: лікарі, пацієнти та прийоми.',
					},
				},
				loadChildren: () =>
					import('./pages/user/department/department.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'doctor/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Лікар',
						description:
							'Профіль лікаря в MedPass: контакти, відділення та пацієнти в роботі.',
					},
				},
				loadChildren: () =>
					import('./pages/user/doctor/doctor.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'client/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Профіль користувача',
						description: 'Публічний профіль користувача MedPass.',
					},
				},
				loadChildren: () =>
					import('./pages/user/client/client.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: 'admin',
		canActivate: [adminsGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Користувачі',
						description: 'Адміністрування користувачів MedPass.',
						index: false,
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.usersRoutes),
			},
			{
				path: 'clients',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Клієнти',
						description: 'Адміністрування клієнтів MedPass.',
						index: false,
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.clientsRoutes),
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
						description: 'Адміністрування динамічних форм MedPass.',
						index: false,
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formsRoutes),
			},
			{
				path: 'form/:formId',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
						description: 'Редагування динамічної форми MedPass.',
						index: false,
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formRoutes),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full',
	},
];
