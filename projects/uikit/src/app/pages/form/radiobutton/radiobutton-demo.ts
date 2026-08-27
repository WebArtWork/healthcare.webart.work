import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from '@wawjs/ngx-prime/radiobutton';

@Component({
	selector: 'uk-radiobutton-demo',
	imports: [FormsModule, RadioButtonModule],
	templateUrl: './radiobutton-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonDemo {
	protected readonly sizes = [undefined, 'small', 'large'] as const;
	protected readonly city = signal('rome');
}
