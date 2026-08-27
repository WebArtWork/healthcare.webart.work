import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { companyProfile } from '../../../company/company.data';

interface HomeFeature {
	icon: string;
	title: string;
	description: string;
}

@Component({
	imports: [RouterLink, ButtonModule, CardModule, TranslateDirective],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	readonly translateService = inject(TranslateService);

	readonly company = companyProfile;

	readonly features: HomeFeature[] = [
		{
			icon: 'pi pi-file-check',
			title: 'Цифровий медичний паспорт',
			description:
				'Кожен пацієнт має повну історію: діагнози, обстеження, призначення й лікування — все зафіксовано в одному записі.',
		},
		{
			icon: 'pi pi-images',
			title: 'Стрічка прийомів',
			description:
				'Перегортайте оновлення як стрічку — обирайте важливе, відкладайте на потім, і повертайтесь до збереженого будь-коли.',
		},
		{
			icon: 'pi pi-map',
			title: 'Пошук на карті',
			description:
				'Знаходьте лікарів, заклади та мережі за розташуванням — з фільтрами під ваш запит.',
		},
		{
			icon: 'pi pi-heart',
			title: 'Відділення та лікарі',
			description:
				'Профілі відділень, мереж і лікарів поруч із кожним пацієнтом — зрозуміло, хто відповідає за лікування.',
		},
	];
}
