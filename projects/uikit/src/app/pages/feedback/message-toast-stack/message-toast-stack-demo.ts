import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { MessageService } from '@wawjs/ngx-prime/api';
import { MessageModule } from '@wawjs/ngx-prime/message';
import { ToastModule } from '@wawjs/ngx-prime/toast';

@Component({
	selector: 'uk-message-toast-stack-demo',
	imports: [ButtonModule, MessageModule, ToastModule],
	providers: [MessageService],
	templateUrl: './message-toast-stack-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageToastStackDemo {
	private readonly messageService = inject(MessageService);

	protected notify(): void {
		this.messageService.add({ severity: 'success', summary: 'Saved', detail: 'Your changes were saved.', life: 3000 });
		this.messageService.add({ severity: 'info', summary: 'Synced', detail: 'Data synced across devices.', life: 3000 });
	}
}
