import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from '@wawjs/ngx-prime/togglebutton';

@Component({
	selector: 'uk-togglebutton-demo',
	imports: [FormsModule, ToggleButtonModule],
	templateUrl: './togglebutton-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleButtonDemo {
	protected readonly checked = signal(false);
}
