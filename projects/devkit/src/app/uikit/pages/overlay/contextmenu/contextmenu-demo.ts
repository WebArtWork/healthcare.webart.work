import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { ContextMenuModule } from '@wawjs/ngx-prime/contextmenu';

@Component({
	selector: 'uk-contextmenu-demo',
	imports: [ContextMenuModule],
	templateUrl: './contextmenu-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuDemo {
	protected readonly items: MenuItem[] = [
		{ label: 'View', icon: 'pi pi-search' },
		{ label: 'Rename', icon: 'pi pi-pencil' },
		{ label: 'Delete', icon: 'pi pi-trash' },
	];
}
