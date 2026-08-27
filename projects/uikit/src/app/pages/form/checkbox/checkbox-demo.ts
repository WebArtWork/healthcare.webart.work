import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from '@wawjs/ngx-prime/checkbox';

@Component({
	selector: 'uk-checkbox-demo',
	imports: [FormsModule, CheckboxModule],
	templateUrl: './checkbox-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxDemo {
	protected readonly sizes = [undefined, 'small', 'large'] as const;
	protected readonly checked = signal(true);
}
