import { ChangeDetectionStrategy, Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from '@wawjs/ngx-prime/card';
import { DatePickerModule } from '@wawjs/ngx-prime/datepicker';
import { TagModule } from '@wawjs/ngx-prime/tag';

import { PagePromptService } from '../../../shared/page-prompt/page-prompt.service';
import { PagePromptConfig } from '../../../shared/page-prompt/page-prompt.types';
import { CALENDAR_EVENTS } from './calendar.data';

const PAGE_PROMPT_CONFIG: PagePromptConfig = {
	pageTitle: 'Calendar',
	sourcePath: 'projects/devkit/src/app/pages/applications/calendar',
	description:
		'An event calendar composing an inline p-datePicker with a plain events list keyed by ISO date.',
	elements: [
		{
			id: 'date-picker',
			label: 'Inline date picker',
			description: 'A p-card containing an inline p-datePicker for choosing a day.',
			selectedByDefault: true,
		},
		{
			id: 'events-list',
			label: 'Events list',
			description:
				'A p-card titled "Events" listing the events for the selected day, each with a time p-tag and a title.',
			selectedByDefault: true,
		},
	],
};

/**
 * No ready-made "calendar app" component exists in ngx-prime — this composes
 * `p-datePicker` (inline) with a plain event list keyed by ISO date, which is
 * the same building block a real scheduling UI would use.
 */
@Component({
	selector: 'sc-calendar',
	imports: [FormsModule, CardModule, DatePickerModule, TagModule],
	templateUrl: './calendar.html',
	styleUrl: './calendar.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarPage implements OnDestroy {
	private readonly pagePromptService = inject(PagePromptService);

	protected readonly selectedDate = signal(new Date('2026-08-25'));

	protected readonly eventsForSelectedDate = computed(() => {
		const iso = this.toIso(this.selectedDate());
		return CALENDAR_EVENTS.filter((event) => event.date === iso);
	});

	constructor() {
		this.pagePromptService.setConfig(PAGE_PROMPT_CONFIG);
	}

	ngOnDestroy(): void {
		this.pagePromptService.clearConfig(PAGE_PROMPT_CONFIG);
	}

	private toIso(date: Date): string {
		return date.toISOString().slice(0, 10);
	}
}
