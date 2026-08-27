import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { MegaMenuItem } from '@wawjs/ngx-prime/api';
import { MegaMenuModule } from '@wawjs/ngx-prime/megamenu';

@Component({
	selector: 'uk-megamenu-demo',
	imports: [MegaMenuModule],
	templateUrl: './megamenu-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MegaMenuDemo {
	protected readonly items: MegaMenuItem[] = [
		{
			label: 'Category 1',
			items: [
				[
					{
						label: 'Sub 1',
						items: [{ label: 'Item 1' }, { label: 'Item 2' }],
					},
					{
						label: 'Sub 2',
						items: [{ label: 'Item 3' }, { label: 'Item 4' }],
					},
				],
			],
		},
		{
			label: 'Category 2',
			items: [
				[
					{
						label: 'Sub 3',
						items: [{ label: 'Item 5' }, { label: 'Item 6' }],
					},
				],
			],
		},
	];
}
