import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { SpeedDialModule } from '@wawjs/ngx-prime/speeddial';

@Component({
	selector: 'uk-speeddial-demo',
	imports: [SpeedDialModule],
	templateUrl: './speeddial-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeedDialDemo {
	protected readonly items: MenuItem[] = [
		{ icon: 'pi pi-pencil' },
		{ icon: 'pi pi-refresh' },
		{ icon: 'pi pi-trash' },
		{ icon: 'pi pi-upload' },
	];
}
