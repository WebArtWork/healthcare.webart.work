import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KeyFilterModule } from '@wawjs/ngx-prime/keyfilter';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';

@Component({
	selector: 'uk-keyfilter-demo',
	imports: [FormsModule, KeyFilterModule, InputTextModule],
	templateUrl: './keyfilter-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyFilterDemo {
	protected readonly integer = signal('');
	protected readonly money = signal('');
	protected readonly hex = signal('');
	protected readonly email = signal('');
	protected readonly alpha = signal('');

	protected setValue(target: ReturnType<typeof signal<string>>, value: string | number): void {
		target.set(String(value));
	}
}
