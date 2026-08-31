import { ChangeDetectionStrategy, Component, OnDestroy, inject, viewChild } from '@angular/core';
import { IconFieldModule } from '@wawjs/ngx-prime/iconfield';
import { InputIconModule } from '@wawjs/ngx-prime/inputicon';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SortableColumn, SortIcon, Table } from '@wawjs/ngx-prime/table';
import { TagModule } from '@wawjs/ngx-prime/tag';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { USERS } from './users.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Users List',
	sourcePath: 'projects/devkit/src/app/pages/users/list',
	description: 'A searchable, sortable, paginated table of users.',
	elements: [
		{
			id: 'search-toolbar',
			label: 'Search toolbar',
			description: 'A p-iconfield with a search icon and a text input that filters the table globally.',
			selectedByDefault: true,
		},
		{
			id: 'users-table',
			label: 'Users table',
			description:
				'A paginated p-table with sortable Name and Role columns, plus Email and a Status p-tag column.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-users',
	imports: [Table, SortableColumn, SortIcon, TagModule, InputTextModule, IconFieldModule, InputIconModule],
	templateUrl: './users.html',
	styleUrl: './users.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Users implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly users = USERS;

	private readonly table = viewChild<Table>('dt');

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}

	protected onSearch(value: string): void {
		this.table()?.filterGlobal(value, 'contains');
	}
}
