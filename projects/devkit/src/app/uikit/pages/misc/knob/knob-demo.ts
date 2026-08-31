import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KnobModule } from '@wawjs/ngx-prime/knob';

@Component({
	selector: 'uk-knob-demo',
	imports: [FormsModule, KnobModule],
	templateUrl: './knob-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KnobDemo {
	protected readonly value = signal(50);
}
