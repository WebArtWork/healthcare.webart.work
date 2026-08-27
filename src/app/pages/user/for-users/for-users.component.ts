import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-users',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-users.component.html',
	styleUrl: './for-users.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForUsersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує користування MedPass?',
			answer: 'Ведення медичної історії та пошук лікарів для пацієнтів безкоштовні.',
		},
		{
			question: 'Звідки береться інформація про лікування?',
			answer: 'Кожен запис у медичному паспорті має історію діагнозів, обстежень та перевірені дані від відділень і мереж.',
		},
		{
			question: 'Чи можу я зв’язатися напряму з лікарем?',
			answer: 'Так, контакти лікаря, відділення або мережі доступні прямо на сторінці профілю.',
		},
	];
}
