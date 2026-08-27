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
				title: 'Neryxomka — цифровий паспорт нерухомості',
				description:
					'Neryxomka показує повну історію об’єкта нерухомості — ремонти, обслуговування, комунікації — поруч з оголошеннями, картою та профілями агентств.',
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
							'Увійдіть або зареєструйтесь у Neryxomka, щоб переглядати цифрові паспорти об’єктів, стрічку пропозицій і керувати профілем.',
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
							'Керуйте особистими даними профілю Neryxomka: ім’я, телефон, фото та коротка інформація про себе.',
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
							'Перевірте форми додавання об’єктів, оголошень, комплексів, агентств та агентів у Neryxomka.',
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
						description: 'Відскануйте QR-код, щоб відкрити мій профіль Neryxomka.',
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
						description: 'Налаштування облікового запису Neryxomka.',
						index: false,
					},
				},
				loadChildren: () =>
					import('./pages/user/settings/settings.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'share',
				canActivate: [MetaGuard],
				data: {
					shareKind: 'app',
					meta: {
						title: 'Поділитися Neryxomka',
						description: 'Відскануйте QR-код, щоб приєднатися до Neryxomka за кілька секунд.',
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
						description: 'Знаходьте житло без переплат посередникам разом з Neryxomka.',
					},
				},
				loadChildren: () =>
					import('./pages/user/for-users/for-users.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-agents',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для агентів',
						description: 'Розвивайте свою практику агента нерухомості з Neryxomka.',
					},
				},
				loadChildren: () =>
					import('./pages/user/for-agents/for-agents.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-developers',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для забудовників',
						description: 'Покажіть свої житлові комплекси покупцям на Neryxomka.',
					},
				},
				loadChildren: () =>
					import('./pages/user/for-developers/for-developers.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-agencies',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для агентств',
						description: 'Розвивайте агентство нерухомості разом з Neryxomka.',
					},
				},
				loadChildren: () =>
					import('./pages/user/for-agencies/for-agencies.routes').then(
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
							'Перегортайте стрічку об’єктів нерухомості Neryxomka — відкладайте цікаве в обране, пропускайте зайве.',
					},
				},
				loadChildren: () =>
					import('./pages/user/feed/feed.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'properties',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Об’єкти',
						description:
							'Перегляньте всі об’єкти нерухомості в цифровому паспорті Neryxomka.',
					},
				},
				loadChildren: () =>
					import('./pages/user/properties/properties.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'agencies',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Агентства',
						description:
							'Перегляньте всі агентства нерухомості, представлені в Neryxomka.',
					},
				},
				loadChildren: () =>
					import('./pages/user/agencies/agencies.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'developers',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Забудовники',
						description:
							'Перегляньте всіх забудовників, представлених у Neryxomka.',
					},
				},
				loadChildren: () =>
					import('./pages/user/developers/developers.routes').then(
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
							'Шукайте й фільтруйте оголошення нерухомості Neryxomka за типом, ціною, статусом і розташуванням.',
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
							'Знаходьте об’єкти нерухомості на карті Neryxomka за їхнім реальним розташуванням.',
					},
				},
				loadChildren: () =>
					import('./pages/user/map/map.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'property/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Об’єкт нерухомості',
						description:
							'Цифровий паспорт об’єкта нерухомості: характеристики, повна історія ремонтів і обслуговування, пов’язані оголошення.',
					},
				},
				loadChildren: () =>
					import('./pages/user/property/property.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'listing/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Оголошення',
						description:
							'Деталі оголошення про продаж або оренду нерухомості в Neryxomka.',
					},
				},
				loadChildren: () =>
					import('./pages/user/listing/listing.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'records/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Запис історії об’єкта',
						description:
							'Запис з цифрового паспорта об’єкта: ремонт, заміна комунікацій або обслуговування.',
					},
				},
				loadChildren: () =>
					import('./pages/user/records/records.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'complex/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Житловий комплекс',
						description:
							'Житловий комплекс у Neryxomka: об’єкти, забудовник і деталі проєкту.',
					},
				},
				loadChildren: () =>
					import('./pages/user/complex/complex.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'developer/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Забудовник',
						description:
							'Профіль забудовника в Neryxomka: реалізовані комплекси та об’єкти.',
					},
				},
				loadChildren: () =>
					import('./pages/user/developer/developer.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'agency/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Агентство',
						description:
							'Профіль агентства нерухомості в Neryxomka: агенти, об’єкти й оголошення.',
					},
				},
				loadChildren: () =>
					import('./pages/user/agency/agency.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'agent/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Агент',
						description:
							'Профіль агента нерухомості в Neryxomka: контакти, агентство та об’єкти в роботі.',
					},
				},
				loadChildren: () =>
					import('./pages/user/agent/agent.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'client/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Профіль користувача',
						description: 'Публічний профіль користувача Neryxomka.',
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
						description: 'Адміністрування користувачів Neryxomka.',
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
						description: 'Адміністрування клієнтів Neryxomka.',
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
						description: 'Адміністрування динамічних форм Neryxomka.',
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
						description: 'Редагування динамічної форми Neryxomka.',
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
