import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ToastModule } from '@wawjs/ngx-prime/toast';

@Component({
	selector: 'uk-toast-demo',
	imports: [ButtonModule, ToastModule],
	providers: [MessageService],
	templateUrl: './toast-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastDemo {
	private readonly messageService = inject(MessageService);

	protected show(severity: 'success' | 'info' | 'warn' | 'error'): void {
		this.messageService.add({ severity, summary: severity, detail: `A ${severity} message`, life: 3000 });
	}
}
