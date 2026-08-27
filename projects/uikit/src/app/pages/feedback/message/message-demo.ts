import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MessageModule } from '@wawjs/ngx-prime/message';

@Component({
	selector: 'uk-message-demo',
	imports: [MessageModule],
	templateUrl: './message-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageDemo {
	protected readonly severities = ['success', 'info', 'warn', 'error', 'secondary', 'contrast'] as const;
}
