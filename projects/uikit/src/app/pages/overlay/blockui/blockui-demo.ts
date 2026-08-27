import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BlockUIModule } from '@wawjs/ngx-prime/blockui';
import { ButtonModule } from '@wawjs/ngx-prime/button';

@Component({
	selector: 'uk-blockui-demo',
	imports: [BlockUIModule, ButtonModule],
	templateUrl: './blockui-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockUIDemo {
	protected readonly blocked = signal(false);
}
