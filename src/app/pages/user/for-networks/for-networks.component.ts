import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-networks',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-networks.component.html',
	styleUrl: './for-networks.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForNetworksPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує розміщення мережі?',
			answer: 'На старті партнерство безкоштовне — напишіть нам, і ми розкажемо про умови.',
		},
		{
			question: 'Що можна показати про медичний заклад?',
			answer: 'Заклад, його відділення, пов’язаних пацієнтів та актуальні оголошення від вашої команди.',
		},
		{
			question: 'Чи можемо ми вести кілька закладів одночасно?',
			answer: 'Так, профіль мережі об’єднує всі ваші заклади та відділення в одному місці.',
		},
	];
}
