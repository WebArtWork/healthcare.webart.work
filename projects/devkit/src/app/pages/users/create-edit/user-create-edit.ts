import { ChangeDetectionStrategy, Component, OnDestroy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { FileUploadModule } from '@wawjs/ngx-prime/fileupload';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { ToggleSwitchModule } from '@wawjs/ngx-prime/toggleswitch';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';

interface RoleOption {
	label: string;
	value: string;
}

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Create / Edit User',
	sourcePath: 'projects/devkit/src/app/pages/users/create-edit',
	description: 'A form for creating or editing a user, with an avatar upload.',
	elements: [
		{
			id: 'form-fields',
			label: 'Name / Email / Role / Active fields',
			description:
				'A two-column grid with pInputText fields for Name and Email, a p-select for Role, and a p-toggleswitch for Active.',
			selectedByDefault: true,
		},
		{
			id: 'avatar-upload',
			label: 'Avatar upload',
			description: 'A full-width p-fileUpload drag-and-drop area for a single image.',
			selectedByDefault: true,
		},
		{
			id: 'form-actions',
			label: 'Form actions',
			description: 'Cancel (outlined, secondary) and Save (primary) p-button actions.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-user-create-edit',
	imports: [
		FormsModule,
		ButtonModule,
		CardModule,
		InputTextModule,
		SelectModule,
		FileUploadModule,
		ToggleSwitchModule,
	],
	templateUrl: './user-create-edit.html',
	styleUrl: './user-create-edit.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreateEdit implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly roles: RoleOption[] = [
		{ label: 'Admin', value: 'admin' },
		{ label: 'Editor', value: 'editor' },
		{ label: 'Viewer', value: 'viewer' },
	];

	protected readonly name = signal('');
	protected readonly email = signal('');
	protected readonly role = signal<RoleOption | null>(null);
	protected readonly active = signal(true);

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}

	protected onAvatarUpload(): void {
		// Demo-only handler — a real app would upload to its own API.
	}
}
