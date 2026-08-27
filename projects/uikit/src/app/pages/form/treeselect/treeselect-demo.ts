import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { TreeNode } from '@wawjs/ngx-prime/api';
import { TreeSelectModule } from '@wawjs/ngx-prime/treeselect';

@Component({
	selector: 'uk-treeselect-demo',
	imports: [FormsModule, TreeSelectModule],
	templateUrl: './treeselect-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeSelectDemo {
	protected readonly nodes: TreeNode[] = [
		{
			key: '0',
			label: 'Documents',
			data: 'Documents Folder',
			icon: 'pi pi-fw pi-folder',
			children: [
				{
					key: '0-0',
					label: 'Work',
					data: 'Work Folder',
					icon: 'pi pi-fw pi-folder',
					children: [
						{ key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
						{ key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' },
					],
				},
				{
					key: '0-1',
					label: 'Home',
					data: 'Home Folder',
					icon: 'pi pi-fw pi-folder',
					children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }],
				},
			],
		},
	];

	protected readonly selection = signal<any>(undefined);
	protected readonly multiSelection = signal<any>(undefined);
}
