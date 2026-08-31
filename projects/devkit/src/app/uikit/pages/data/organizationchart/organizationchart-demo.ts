import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { TreeNode } from '@wawjs/ngx-prime/api';
import { OrganizationChartModule } from '@wawjs/ngx-prime/organizationchart';

@Component({
	selector: 'uk-organizationchart-demo',
	imports: [OrganizationChartModule],
	templateUrl: './organizationchart-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationChartDemo {
	protected readonly data: TreeNode[] = [
		{
			label: 'CEO',
			expanded: true,
			children: [
				{
					label: 'CTO',
					expanded: true,
					children: [{ label: 'Dev Lead' }, { label: 'QA Lead' }],
				},
				{
					label: 'CFO',
					expanded: true,
					children: [{ label: 'Accountant' }],
				},
			],
		},
	];
}
