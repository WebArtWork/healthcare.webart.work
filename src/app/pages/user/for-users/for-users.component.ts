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
			question: 'Скільки коштує користування Neryxomka?',
			answer: 'Пошук і перегляд оголошень для користувачів безкоштовні.',
		},
		{
			question: 'Звідки береться інформація про об’єкти?',
			answer: 'Кожен об’єкт має цифровий паспорт з історією ремонтів, обслуговування та перевіреними даними від агентств і забудовників.',
		},
		{
			question: 'Чи можу я зв’язатися напряму з власником або агентом?',
			answer: 'Так, контакти агента, агентства або забудовника доступні прямо на сторінці оголошення.',
		},
	];
}
