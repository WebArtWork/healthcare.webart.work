import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-departments',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-departments.component.html',
	styleUrl: './for-departments.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForDepartmentsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує партнерство для відділення?',
			answer: 'На старті партнерство безкоштовне — напишіть нам, і ми розкажемо про умови.',
		},
		{
			question: 'Чи можуть наші лікарі мати власні профілі?',
			answer: 'Так, кожен лікар відділення отримує свій публічний профіль, пов’язаний з профілем відділення.',
		},
		{
			question: 'Що бачать пацієнти в профілі відділення?',
			answer: 'Опис, рейтинг, кількість лікарів і всі доступні напрямки прийому відділення.',
		},
	];
}
