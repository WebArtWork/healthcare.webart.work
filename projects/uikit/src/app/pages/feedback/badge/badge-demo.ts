import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BadgeModule } from '@wawjs/ngx-prime/badge';

@Component({
	selector: 'uk-badge-demo',
	imports: [BadgeModule],
	templateUrl: './badge-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeDemo {
	protected readonly severities = ['success', 'info', 'warn', 'danger', 'secondary', 'contrast'] as const;
}
