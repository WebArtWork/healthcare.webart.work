import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';

@Component({
	selector: 'uk-input-demo',
	imports: [InputTextModule],
	templateUrl: './input-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDemo {
	protected readonly sizes = [undefined, 'small', 'large'] as const;
}
