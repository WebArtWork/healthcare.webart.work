import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { DynamicDialogRef } from '@wawjs/ngx-prime/dynamicdialog';

@Component({
	selector: 'uk-dynamicdialog-content',
	imports: [ButtonModule],
	template: `
		<p style="margin: 0 0 1rem">This content is a component loaded dynamically into the dialog.</p>
		<p-button label="Close" size="small" (onClick)="ref.close()" />
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicDialogContentDemo {
	protected readonly ref = inject(DynamicDialogRef);
}
