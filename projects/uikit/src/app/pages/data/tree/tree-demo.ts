import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { TreeNode } from '@wawjs/ngx-prime/api';
import { TreeModule } from '@wawjs/ngx-prime/tree';

@Component({
	selector: 'uk-tree-demo',
	imports: [TreeModule],
	templateUrl: './tree-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeDemo {
	protected readonly nodes: TreeNode[] = [
		{
			key: '0',
			label: 'Documents',
			icon: 'pi pi-fw pi-folder',
			children: [
				{
					key: '0-0',
					label: 'Work',
					icon: 'pi pi-fw pi-folder',
					children: [
						{ key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file' },
						{ key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file' },
					],
				},
				{ key: '0-1', label: 'Home', icon: 'pi pi-fw pi-folder', children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file' }] },
			],
		},
	];

	protected readonly selection = signal<TreeNode | undefined>(undefined);
}
