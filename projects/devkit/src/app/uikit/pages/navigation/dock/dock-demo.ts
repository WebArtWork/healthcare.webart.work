import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { DockModule } from '@wawjs/ngx-prime/dock';

@Component({
	selector: 'uk-dock-demo',
	imports: [DockModule],
	templateUrl: './dock-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DockDemo {
	protected readonly items: MenuItem[] = [
		{ label: 'Finder', icon: 'pi pi-desktop' },
		{ label: 'Terminal', icon: 'pi pi-server' },
		{ label: 'Mail', icon: 'pi pi-envelope' },
		{ label: 'Settings', icon: 'pi pi-cog' },
	];
}
