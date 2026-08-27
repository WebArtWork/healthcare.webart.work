import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PaginatorModule } from '@wawjs/ngx-prime/paginator';
import type { PaginatorState } from '@wawjs/ngx-prime/paginator';

@Component({
	selector: 'uk-paginator-demo',
	imports: [PaginatorModule],
	templateUrl: './paginator-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorDemo {
	protected readonly first = signal(0);
	protected readonly rows = signal(10);

	protected onPageChange(event: PaginatorState): void {
		this.first.set(event.first ?? 0);
		this.rows.set(event.rows ?? 10);
	}
}
