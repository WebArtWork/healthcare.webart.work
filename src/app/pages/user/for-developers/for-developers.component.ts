import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-developers',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-developers.component.html',
	styleUrl: './for-developers.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForDevelopersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує розміщення забудовника?',
			answer: 'На старті партнерство безкоштовне — напишіть нам, і ми розкажемо про умови.',
		},
		{
			question: 'Що можна показати про житловий комплекс?',
			answer: 'Комплекс, черги будівництва, пов’язані об’єкти та актуальні оголошення від вашої команди.',
		},
		{
			question: 'Чи можемо ми вести кілька комплексів одночасно?',
			answer: 'Так, профіль забудовника об’єднує всі ваші комплекси та об’єкти в одному місці.',
		},
	];
}
