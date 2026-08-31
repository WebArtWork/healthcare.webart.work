import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { SplitButtonModule } from '@wawjs/ngx-prime/splitbutton';

@Component({
	selector: 'uk-splitbutton-demo',
	imports: [SplitButtonModule],
	templateUrl: './splitbutton-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitButtonDemo {
	protected readonly items: MenuItem[] = [
		{ label: 'Update', icon: 'pi pi-refresh' },
		{ label: 'Delete', icon: 'pi pi-times' },
		{ separator: true },
		{ label: 'Home', icon: 'pi pi-home' },
	];
}
