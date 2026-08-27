import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TableModule } from '@wawjs/ngx-prime/table';
import { TimelineModule } from '@wawjs/ngx-prime/timeline';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { ORDER_CUSTOMER, ORDER_LINE_ITEMS, ORDER_STATUS_EVENTS } from './order-details.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Order Details',
	sourcePath: 'projects/showcase/src/app/pages/ecommerce/order-details',
	description: 'A single order: a status timeline and customer info side by side, plus a line items table.',
	elements: [
		{
			id: 'status-timeline',
			label: 'Status timeline',
			description: 'A p-card titled "Status" containing a p-timeline of order status events.',
			selectedByDefault: true,
		},
		{
			id: 'customer-card',
			label: 'Customer card',
			description: 'A p-card titled "Customer" with the customer name, email and address.',
			selectedByDefault: true,
		},
		{
			id: 'line-items-table',
			label: 'Line items table',
			description:
				'A p-card titled "Line Items" containing a p-table with Product / Quantity / Price / Total columns.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-order-details',
	imports: [CardModule, TableModule, TimelineModule],
	templateUrl: './order-details.html',
	styleUrl: './order-details.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDetails implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly events = ORDER_STATUS_EVENTS;
	protected readonly lineItems = ORDER_LINE_ITEMS;
	protected readonly customer = ORDER_CUSTOMER;

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}
}
