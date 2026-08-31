import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { DialogService, DynamicDialogModule } from '@wawjs/ngx-prime/dynamicdialog';
import { DynamicDialogContentDemo } from './dynamicdialog-content';

@Component({
	selector: 'uk-dynamicdialog-demo',
	imports: [ButtonModule, DynamicDialogModule],
	providers: [DialogService],
	templateUrl: './dynamicdialog-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicDialogDemo {
	private readonly dialogService = inject(DialogService);

	protected open(): void {
		this.dialogService.open(DynamicDialogContentDemo, {
			header: 'Dynamic Dialog',
			width: '30rem',
			modal: true,
		});
	}
}
