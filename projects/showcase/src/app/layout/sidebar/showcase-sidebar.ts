import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { PanelMenuModule } from '@wawjs/ngx-prime/panelmenu';

@Component({
	selector: 'sc-sidebar',
	imports: [PanelMenuModule],
	templateUrl: './showcase-sidebar.html',
	styleUrl: './showcase-sidebar.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseSidebar {
	protected readonly items: MenuItem[] = [
		{ label: 'Landing', icon: 'pi pi-globe', routerLink: ['/'] },
		{
			label: 'Dashboards',
			icon: 'pi pi-home',
			items: [
				{ label: 'Default', routerLink: ['/dashboards/default'] },
				{ label: 'Analytics', routerLink: ['/dashboards/analytics'] },
			],
		},
		{
			label: 'Users',
			icon: 'pi pi-users',
			items: [
				{ label: 'List', routerLink: ['/users/list'] },
				{ label: 'Profile', routerLink: ['/users/profile'] },
				{ label: 'Create / Edit', routerLink: ['/users/create-edit'] },
			],
		},
		{
			label: 'Ecommerce',
			icon: 'pi pi-shopping-cart',
			items: [
				{ label: 'Products', routerLink: ['/ecommerce/products'] },
				{ label: 'Create / Edit Product', routerLink: ['/ecommerce/product-create-edit'] },
				{ label: 'Orders', routerLink: ['/ecommerce/orders'] },
				{ label: 'Order Details', routerLink: ['/ecommerce/order-details'] },
			],
		},
		{
			label: 'Projects',
			icon: 'pi pi-folder',
			items: [
				{ label: 'List', routerLink: ['/projects/list'] },
				{ label: 'Project Details', routerLink: ['/projects/project-details'] },
				{ label: 'Tasks', routerLink: ['/projects/tasks'] },
			],
		},
		{
			label: 'Applications',
			icon: 'pi pi-th-large',
			items: [
				{ label: 'Calendar', routerLink: ['/applications/calendar'] },
				{ label: 'Chat', routerLink: ['/applications/chat'] },
				{ label: 'Files', routerLink: ['/applications/files'] },
			],
		},
		{
			label: 'Account',
			icon: 'pi pi-cog',
			items: [{ label: 'Settings', routerLink: ['/account/settings'] }],
		},
	];
}
