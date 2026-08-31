import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TableModule } from '@wawjs/ngx-prime/table';
import { TabsModule } from '@wawjs/ngx-prime/tabs';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TimelineModule } from '@wawjs/ngx-prime/timeline';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { PROJECT_ACTIVITY, PROJECT_TASK_ROWS } from './project-details.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Project Details',
	sourcePath: 'projects/devkit/src/app/pages/projects/project-details',
	description: 'A single project overview with tabbed Activity and Tasks views.',
	elements: [
		{
			id: 'activity-tab',
			label: 'Activity tab',
			description: 'A p-timeline of project activity events, shown in the first p-tabpanel.',
			selectedByDefault: true,
		},
		{
			id: 'tasks-tab',
			label: 'Tasks tab',
			description:
				'A p-table with Task / Assignee / Status columns (status as a p-tag), shown in the second p-tabpanel.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-project-details',
	imports: [CardModule, TabsModule, TimelineModule, TableModule, TagModule],
	templateUrl: './project-details.html',
	styleUrl: './project-details.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetails implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly activity = PROJECT_ACTIVITY;
	protected readonly tasks = PROJECT_TASK_ROWS;

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}
}
