import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-doctors',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-doctors.component.html',
	styleUrl: './for-doctors.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForDoctorsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує реєстрація для лікаря?',
			answer: 'На старті реєстрація лікаря в MedPass безкоштовна — напишіть нам, і ми розкажемо деталі.',
		},
		{
			question: 'Чи потрібно прив’язуватися до відділення?',
			answer: 'Ні, ви можете вести профіль як незалежний лікар або як представник відділення.',
		},
		{
			question: 'Що бачать пацієнти в моєму профілі?',
			answer: 'Вашу спеціалізацію, контакти та відгуки пацієнтів у публічному профілі лікаря.',
		},
	];
}
