import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { MenubarModule } from '@wawjs/ngx-prime/menubar';

@Component({
	selector: 'uk-menubar-demo',
	imports: [MenubarModule],
	templateUrl: './menubar-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenubarDemo {
	protected readonly items: MenuItem[] = [
		{ label: 'Home', icon: 'pi pi-home' },
		{
			label: 'Products',
			icon: 'pi pi-star',
			items: [
				{ label: 'Components', icon: 'pi pi-bolt' },
				{ label: 'Blocks', icon: 'pi pi-server' },
			],
		},
		{ label: 'Contact', icon: 'pi pi-envelope' },
	];
}
