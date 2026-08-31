import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import type { MenuItem } from '@wawjs/ngx-prime/api';
import { BreadcrumbModule } from '@wawjs/ngx-prime/breadcrumb';
import { CardModule } from '@wawjs/ngx-prime/card';
import { FileUploadModule } from '@wawjs/ngx-prime/fileupload';
import { TableModule } from '@wawjs/ngx-prime/table';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { FILE_ROWS } from './files.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Files',
	sourcePath: 'projects/devkit/src/app/pages/applications/files',
	description: 'A file browser with breadcrumb navigation, an upload control and a files table.',
	elements: [
		{
			id: 'breadcrumb',
			label: 'Breadcrumb',
			description: 'A p-breadcrumb showing the current folder path with a home icon.',
			selectedByDefault: true,
		},
		{
			id: 'upload-button',
			label: 'Upload button',
			description: 'A basic-mode p-fileUpload button for adding files.',
			selectedByDefault: true,
		},
		{
			id: 'files-table',
			label: 'Files table',
			description: 'A p-table with Name (with a type icon), Size and Modified columns.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-files',
	imports: [BreadcrumbModule, CardModule, TableModule, FileUploadModule],
	templateUrl: './files.html',
	styleUrl: './files.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Files implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly files = FILE_ROWS;
	protected readonly home: MenuItem = { icon: 'pi pi-home', routerLink: '/applications/files' };
	protected readonly breadcrumbItems: MenuItem[] = [{ label: 'Documents' }];

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}

	protected onUpload(): void {
		// Demo-only handler — a real app would upload to its own API.
	}
}
