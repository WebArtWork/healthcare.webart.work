import { ChangeDetectionStrategy, Component, OnDestroy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { PasswordModule } from '@wawjs/ngx-prime/password';
import { TabsModule } from '@wawjs/ngx-prime/tabs';
import { ToggleSwitchModule } from '@wawjs/ngx-prime/toggleswitch';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Account Settings',
	sourcePath: 'projects/devkit/src/app/pages/account/settings',
	description: 'Account settings with tabbed Profile, Security and Notifications sections.',
	elements: [
		{
			id: 'profile-tab',
			label: 'Profile tab',
			description: 'pInputText fields for Name and Email, plus a Save Changes p-button.',
			selectedByDefault: true,
		},
		{
			id: 'security-tab',
			label: 'Security tab',
			description: 'p-password fields for Current and New Password, plus an Update Password p-button.',
			selectedByDefault: true,
		},
		{
			id: 'notifications-tab',
			label: 'Notifications tab',
			description: 'A list of labeled p-toggleswitch rows for notification preferences.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-account-settings',
	imports: [
		FormsModule,
		ButtonModule,
		CardModule,
		InputTextModule,
		PasswordModule,
		TabsModule,
		ToggleSwitchModule,
	],
	templateUrl: './settings.html',
	styleUrl: './settings.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSettings implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly name = signal('Ada Lovelace');
	protected readonly email = signal('ada.lovelace@example.com');

	protected readonly currentPassword = signal('');
	protected readonly newPassword = signal('');

	protected readonly emailNotifications = signal(true);
	protected readonly pushNotifications = signal(false);
	protected readonly weeklyDigest = signal(true);

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}
}
