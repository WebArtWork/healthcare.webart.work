import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';

@Component({
	selector: 'uk-textarea-demo',
	imports: [FormsModule, TextareaModule],
	templateUrl: './textarea-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaDemo {
	protected readonly value = signal('');
}
