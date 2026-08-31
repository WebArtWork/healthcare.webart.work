import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { Popover, PopoverModule } from '@wawjs/ngx-prime/popover';

@Component({
	selector: 'uk-popover-demo',
	imports: [ButtonModule, PopoverModule],
	templateUrl: './popover-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverDemo {
	protected readonly op = viewChild.required<Popover>('op');

	protected toggle(event: Event): void {
		this.op().toggle(event);
	}
}
