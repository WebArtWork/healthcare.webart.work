import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { TreeNode } from '@wawjs/ngx-prime/api';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TreeModule } from '@wawjs/ngx-prime/tree';

@Component({
	selector: 'uk-tree-composite-demo',
	imports: [FormsModule, InputTextModule, TagModule, TreeModule],
	templateUrl: './tree-composite-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeCompositeDemo {
	protected readonly filterValue = signal('');

	protected readonly nodes: TreeNode[] = [
		{
			key: '0',
			label: 'Engineering',
			icon: 'pi pi-fw pi-sitemap',
			children: [
				{ key: '0-0', label: 'Frontend Team', icon: 'pi pi-fw pi-users', data: { members: 8 } },
				{ key: '0-1', label: 'Backend Team', icon: 'pi pi-fw pi-users', data: { members: 6 } },
			],
		},
		{
			key: '1',
			label: 'Design',
			icon: 'pi pi-fw pi-sitemap',
			children: [{ key: '1-0', label: 'Product Design', icon: 'pi pi-fw pi-users', data: { members: 4 } }],
		},
	];

	protected readonly selection = signal<TreeNode | undefined>(undefined);
}
