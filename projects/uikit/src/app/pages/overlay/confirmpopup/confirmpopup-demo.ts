import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { ConfirmationService } from '@wawjs/ngx-prime/api';
import { ConfirmPopupModule } from '@wawjs/ngx-prime/confirmpopup';

@Component({
	selector: 'uk-confirmpopup-demo',
	imports: [ButtonModule, ConfirmPopupModule],
	providers: [ConfirmationService],
	templateUrl: './confirmpopup-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmPopupDemo {
	private readonly confirmationService = inject(ConfirmationService);

	protected confirm(event: Event): void {
		this.confirmationService.confirm({
			target: event.target as EventTarget,
			message: 'Are you sure you want to proceed?',
			icon: 'pi pi-exclamation-triangle',
		});
	}
}
