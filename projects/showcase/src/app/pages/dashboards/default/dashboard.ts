import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TableModule } from '@wawjs/ngx-prime/table';
import { TagModule } from '@wawjs/ngx-prime/tag';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { DASHBOARD_STATS, RECENT_ORDERS } from './dashboard.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Default Dashboard',
	sourcePath: 'projects/showcase/src/app/pages/dashboards/default',
	description:
		'An overview dashboard combining a row of summary stat cards with a recent activity table below.',
	elements: [
		{
			id: 'stat-cards',
			label: 'Stat cards row',
			description:
				'A responsive row of p-card summary tiles, each with an icon, a large value and a label.',
			selectedByDefault: true,
		},
		{
			id: 'orders-table',
			label: 'Recent Orders table',
			description:
				'A p-card titled "Recent Orders" containing a p-table with Order / Customer / Total / Status columns, status rendered as a p-tag.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-dashboard',
	imports: [CardModule, TableModule, TagModule],
	templateUrl: './dashboard.html',
	styleUrl: './dashboard.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly stats = DASHBOARD_STATS;
	protected readonly orders = RECENT_ORDERS;

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}
}
