import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { BreadcrumbModule } from '@wawjs/ngx-prime/breadcrumb';

@Component({
	selector: 'uk-breadcrumb-demo',
	imports: [BreadcrumbModule],
	templateUrl: './breadcrumb-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbDemo {
	protected readonly home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
	protected readonly items: MenuItem[] = [
		{ label: 'Components' },
		{ label: 'Form' },
		{ label: 'InputText' },
	];
}
