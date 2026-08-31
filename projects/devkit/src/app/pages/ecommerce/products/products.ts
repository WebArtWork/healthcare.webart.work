import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TableModule } from '@wawjs/ngx-prime/table';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { PRODUCTS } from './products.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Products',
	sourcePath: 'projects/devkit/src/app/pages/ecommerce/products',
	description: 'A product catalog table with stock levels, status tags and a create action.',
	elements: [
		{
			id: 'page-header',
			label: 'Page header',
			description: 'A title next to a "New Product" p-button that links to the create/edit form.',
			selectedByDefault: true,
		},
		{
			id: 'products-table',
			label: 'Products table',
			description:
				'A paginated p-table with Product / Category / Price / Stock / Status columns, status as a p-tag, and an edit p-button per row.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-products',
	imports: [ButtonModule, CardModule, TagModule, TableModule, RouterLink],
	templateUrl: './products.html',
	styleUrl: './products.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly products = PRODUCTS;

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}
}
