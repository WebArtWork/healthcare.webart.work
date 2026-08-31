import { ChangeDetectionStrategy, Component, OnDestroy, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { IconFieldModule } from '@wawjs/ngx-prime/iconfield';
import { InputIconModule } from '@wawjs/ngx-prime/inputicon';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SortableColumn, SortIcon, Table } from '@wawjs/ngx-prime/table';
import { TagModule } from '@wawjs/ngx-prime/tag';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { ORDERS } from './orders.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Orders',
	sourcePath: 'projects/devkit/src/app/pages/ecommerce/orders',
	description: 'A searchable, sortable, paginated table of orders with a view-details action.',
	elements: [
		{
			id: 'search-toolbar',
			label: 'Search toolbar',
			description: 'A p-iconfield with a search icon and a text input that filters the table globally.',
			selectedByDefault: true,
		},
		{
			id: 'orders-table',
			label: 'Orders table',
			description:
				'A paginated p-table with Order / Customer / Total / Status columns, status as a p-tag, and a view p-button per row linking to order details.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-orders',
	imports: [
		Table,
		SortableColumn,
		SortIcon,
		TagModule,
		InputTextModule,
		IconFieldModule,
		InputIconModule,
		ButtonModule,
		CardModule,
		RouterLink,
	],
	templateUrl: './orders.html',
	styleUrl: './orders.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Orders implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly orders = ORDERS;

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
