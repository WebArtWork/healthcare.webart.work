import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { StepsModule } from '@wawjs/ngx-prime/steps';

@Component({
	selector: 'uk-steps-demo',
	imports: [StepsModule],
	templateUrl: './steps-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsDemo {
	protected readonly activeIndex = signal(1);

	protected readonly items: MenuItem[] = [
		{ label: 'Personal' },
		{ label: 'Payment' },
		{ label: 'Confirmation' },
	];
}
