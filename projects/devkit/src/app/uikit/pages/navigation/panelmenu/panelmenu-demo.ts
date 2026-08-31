import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { PanelMenuModule } from '@wawjs/ngx-prime/panelmenu';

@Component({
	selector: 'uk-panelmenu-demo',
	imports: [PanelMenuModule],
	templateUrl: './panelmenu-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelMenuDemo {
	protected readonly items: MenuItem[] = [
		{
			label: 'Files',
			icon: 'pi pi-file',
			items: [{ label: 'New' }, { label: 'Open' }],
		},
		{
			label: 'Edit',
			icon: 'pi pi-pencil',
			items: [{ label: 'Copy' }, { label: 'Paste' }],
		},
	];
}
