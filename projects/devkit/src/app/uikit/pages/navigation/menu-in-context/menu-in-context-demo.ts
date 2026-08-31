import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { BreadcrumbModule } from '@wawjs/ngx-prime/breadcrumb';
import { MenubarModule } from '@wawjs/ngx-prime/menubar';
import { PanelMenuModule } from '@wawjs/ngx-prime/panelmenu';

@Component({
	selector: 'uk-menu-in-context-demo',
	imports: [BreadcrumbModule, MenubarModule, PanelMenuModule],
	templateUrl: './menu-in-context-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuInContextDemo {
	protected readonly topNav: MenuItem[] = [
		{ label: 'Dashboard', icon: 'pi pi-home' },
		{
			label: 'Products',
			icon: 'pi pi-box',
			items: [{ label: 'All Products' }, { label: 'Categories' }],
		},
		{ label: 'Orders', icon: 'pi pi-shopping-cart' },
	];

	protected readonly home: MenuItem = { icon: 'pi pi-home' };
	protected readonly crumb: MenuItem[] = [{ label: 'Products' }, { label: 'Categories' }, { label: 'Electronics' }];

	protected readonly sideNav: MenuItem[] = [
		{
			label: 'Catalog',
			icon: 'pi pi-box',
			items: [{ label: 'Products' }, { label: 'Categories' }, { label: 'Tags' }],
		},
		{
			label: 'Sales',
			icon: 'pi pi-chart-line',
			items: [{ label: 'Orders' }, { label: 'Invoices' }],
		},
	];
}
