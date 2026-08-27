import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerDirective } from '@wawjs/ngx-prime/colorpicker';

@Component({
	selector: 'uk-colorpicker-demo',
	imports: [FormsModule, ColorPickerDirective],
	templateUrl: './colorpicker-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerDemo {
	protected readonly color = signal('#3357FF');
}
