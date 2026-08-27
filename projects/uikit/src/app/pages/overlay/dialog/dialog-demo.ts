import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { DialogModule } from '@wawjs/ngx-prime/dialog';

@Component({
	selector: 'uk-dialog-demo',
	imports: [DialogModule, ButtonModule],
	templateUrl: './dialog-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDemo {
	protected readonly basicVisible = signal(false);
	protected readonly modalVisible = signal(false);
	protected readonly maximizableVisible = signal(false);
}
