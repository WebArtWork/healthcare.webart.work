import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from '@wawjs/ngx-prime/selectbutton';

@Component({
	selector: 'uk-selectbutton-demo',
	imports: [FormsModule, SelectButtonModule],
	templateUrl: './selectbutton-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectButtonDemo {
	protected readonly options = ['Off', 'On'];
	protected readonly value = signal('Off');

	protected readonly multiOptions = ['Bold', 'Italic', 'Underline'];
	protected readonly multiValue = signal<string[]>(['Bold']);
}
