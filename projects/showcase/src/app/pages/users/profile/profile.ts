import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { AvatarModule } from '@wawjs/ngx-prime/avatar';
import { CardModule } from '@wawjs/ngx-prime/card';
import { DividerModule } from '@wawjs/ngx-prime/divider';
import { TagModule } from '@wawjs/ngx-prime/tag';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { PROFILE_STATS, PROFILE_TAGS } from './profile.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'User Profile',
	sourcePath: 'projects/showcase/src/app/pages/users/profile',
	description: "A user's profile card with an avatar, stats and tags.",
	elements: [
		{
			id: 'profile-header',
			label: 'Profile header',
			description: 'A p-avatar next to a name and title/subtitle.',
			selectedByDefault: true,
		},
		{
			id: 'profile-stats',
			label: 'Stats row',
			description: 'A row of value/label stat pairs, separated from the header by a p-divider.',
			selectedByDefault: true,
		},
		{
			id: 'profile-tags',
			label: 'Tags row',
			description: 'A row of secondary-severity p-tag chips, separated by a p-divider.',
			selectedByDefault: true,
		},
	],
};

@Component({
	selector: 'sc-profile',
	imports: [CardModule, AvatarModule, DividerModule, TagModule],
	templateUrl: './profile.html',
	styleUrl: './profile.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Profile implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly stats = PROFILE_STATS;
	protected readonly tags = PROFILE_TAGS;

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}
}
