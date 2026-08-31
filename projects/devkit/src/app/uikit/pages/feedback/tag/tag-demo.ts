import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TagModule } from '@wawjs/ngx-prime/tag';

@Component({
	selector: 'uk-tag-demo',
	imports: [TagModule],
	templateUrl: './tag-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagDemo {
	protected readonly severities = ['success', 'info', 'warn', 'danger', 'secondary', 'contrast'] as const;
}
