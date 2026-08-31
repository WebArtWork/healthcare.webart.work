import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { TreeNode } from '@wawjs/ngx-prime/api';
import { TreeTableModule } from '@wawjs/ngx-prime/treetable';

@Component({
	selector: 'uk-treetable-demo',
	imports: [TreeTableModule],
	templateUrl: './treetable-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeTableDemo {
	protected readonly files: TreeNode[] = [
		{
			data: { name: 'Documents', size: '75kb', type: 'Folder' },
			children: [
				{ data: { name: 'Work.pdf', size: '15kb', type: 'PDF' } },
				{ data: { name: 'Home.pdf', size: '60kb', type: 'PDF' } },
			],
		},
		{
			data: { name: 'Events', size: '20kb', type: 'Folder' },
			children: [{ data: { name: 'Meeting.doc', size: '20kb', type: 'Document' } }],
		},
	];
}
