import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-specialists',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-specialists.component.html',
	styleUrl: './for-specialists.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForSpecialistsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Хто може зареєструватися як спеціаліст?',
			answer: 'Медсестри, терапевти, технічний та інший медичний персонал, що надає допомогу пацієнтам поза візитами до лікаря.',
		},
		{
			question: 'Чи бачу я медичну історію пацієнта?',
			answer: 'Так, у межах вашої ролі ви бачите потрібну частину цифрового медичного паспорта пацієнта — саме ту інформацію, яка стосується вашої допомоги.',
		},
		{
			question: 'Як я отримую направлення?',
			answer: 'Направлення надходять від лікарів, відділень або мереж просто у ваш профіль — без дзвінків і паперів.',
		},
	];
}
