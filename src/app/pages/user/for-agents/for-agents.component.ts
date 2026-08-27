import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/lead-form/lead-form.component';

@Component({
	selector: 'app-for-agents',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-agents.component.html',
	styleUrl: './for-agents.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForAgentsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Скільки коштує розміщення для агента?',
			answer: 'На старті реєстрація агента в Neryxomka безкоштовна — напишіть нам, і ми розкажемо деталі.',
		},
		{
			question: 'Чи потрібно прив’язуватися до агентства?',
			answer: 'Ні, ви можете вести профіль як незалежний агент або як представник агентства.',
		},
		{
			question: 'Що бачать клієнти в моєму профілі?',
			answer: 'Ваші активні оголошення, контакти та відгуки клієнтів у публічному профілі агента.',
		},
	];
}
