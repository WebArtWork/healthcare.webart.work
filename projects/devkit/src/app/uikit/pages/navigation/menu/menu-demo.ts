import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { MenuModule } from '@wawjs/ngx-prime/menu';

@Component({
	selector: 'uk-menu-demo',
	imports: [MenuModule],
	templateUrl: './menu-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuDemo {
	protected readonly items: MenuItem[] = [
		{ label: 'New', icon: 'pi pi-plus' },
		{ label: 'Search', icon: 'pi pi-search' },
		{ separator: true },
		{ label: 'Delete', icon: 'pi pi-trash' },
	];
}
