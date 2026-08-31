import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';

@Component({
	selector: 'uk-inputnumber-demo',
	imports: [FormsModule, InputNumberModule],
	templateUrl: './inputnumber-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberDemo {
	protected readonly value = signal<number | null>(1000);
	protected readonly currency = signal<number | null>(1000);
}
