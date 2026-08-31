import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SliderModule } from '@wawjs/ngx-prime/slider';

@Component({
	selector: 'uk-slider-demo',
	imports: [FormsModule, SliderModule],
	templateUrl: './slider-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderDemo {
	protected readonly value = signal(40);
	protected readonly rangeValue = signal([20, 60]);
}
