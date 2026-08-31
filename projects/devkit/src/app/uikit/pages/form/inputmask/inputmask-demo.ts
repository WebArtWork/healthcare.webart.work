import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputMaskDirective } from '@wawjs/ngx-prime/inputmask';

@Component({
	selector: 'uk-inputmask-demo',
	imports: [FormsModule, InputMaskDirective],
	templateUrl: './inputmask-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputMaskDemo {
	protected readonly phone = signal('');
	protected readonly ssn = signal('');
	protected readonly serial = signal('');
}
