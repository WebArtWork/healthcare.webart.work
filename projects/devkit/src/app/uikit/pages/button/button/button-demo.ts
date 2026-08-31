import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';

@Component({
	selector: 'uk-button-demo',
	imports: [ButtonModule],
	templateUrl: './button-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDemo {
	protected readonly sizes = [undefined, 'small', 'large'] as const;
	protected readonly severities = [
		'primary',
		'secondary',
		'success',
		'info',
		'warn',
		'danger',
		'help',
		'contrast',
	] as const;
}
