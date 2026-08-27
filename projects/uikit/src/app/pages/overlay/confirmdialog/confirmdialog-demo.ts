import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { ConfirmationService } from '@wawjs/ngx-prime/api';
import { ConfirmDialogModule } from '@wawjs/ngx-prime/confirmdialog';

@Component({
	selector: 'uk-confirmdialog-demo',
	imports: [ButtonModule, ConfirmDialogModule],
	providers: [ConfirmationService],
	templateUrl: './confirmdialog-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogDemo {
	private readonly confirmationService = inject(ConfirmationService);

	protected confirm(): void {
		this.confirmationService.confirm({
			message: 'Are you sure you want to proceed?',
			header: 'Confirmation',
			icon: 'pi pi-exclamation-triangle',
		});
	}
}
