import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from '@wawjs/ngx-prime/floatlabel';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';

@Component({
	selector: 'uk-floatlabel-demo',
	imports: [FormsModule, FloatLabelModule, InputTextModule],
	templateUrl: './floatlabel-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatLabelDemo {
	protected readonly value = signal('');
}
