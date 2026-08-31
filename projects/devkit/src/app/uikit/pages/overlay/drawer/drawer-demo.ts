import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { DrawerModule } from '@wawjs/ngx-prime/drawer';

@Component({
	selector: 'uk-drawer-demo',
	imports: [ButtonModule, DrawerModule],
	templateUrl: './drawer-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerDemo {
	protected readonly leftVisible = signal(false);
	protected readonly rightVisible = signal(false);
	protected readonly topVisible = signal(false);
	protected readonly fullVisible = signal(false);
}
