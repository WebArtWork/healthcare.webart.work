import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { TieredMenuModule } from '@wawjs/ngx-prime/tieredmenu';

@Component({
	selector: 'uk-tieredmenu-demo',
	imports: [TieredMenuModule],
	templateUrl: './tieredmenu-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TieredMenuDemo {
	protected readonly items: MenuItem[] = [
		{
			label: 'File',
			icon: 'pi pi-file',
			items: [
				{ label: 'New', icon: 'pi pi-plus' },
				{
					label: 'Open',
					icon: 'pi pi-folder-open',
					items: [{ label: 'Recent' }, { label: 'Browse' }],
				},
			],
		},
		{ label: 'Edit', icon: 'pi pi-pencil', items: [{ label: 'Copy' }, { label: 'Paste' }] },
	];
}
