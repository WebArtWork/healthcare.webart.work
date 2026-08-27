import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from '@wawjs/ngx-prime/toggleswitch';

@Component({
	selector: 'uk-toggleswitch-demo',
	imports: [FormsModule, ToggleSwitchModule],
	templateUrl: './toggleswitch-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleSwitchDemo {
	protected readonly checked = signal(false);
}
