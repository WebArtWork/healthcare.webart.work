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
			title: 'Цифровий паспорт об’єкта',
			description:
				'Кожна нерухомість має повну історію: ремонти, заміни комунікацій, обслуговування — все зафіксовано в одному записі.',
		},
		{
			icon: 'pi pi-images',
			title: 'Стрічка об’єктів',
			description:
				'Перегортайте пропозиції як стрічку — обирайте цікаве, відкладайте зайве, і повертайтесь до збереженого будь-коли.',
		},
		{
			icon: 'pi pi-map',
			title: 'Пошук на карті',
			description:
				'Знаходьте об’єкти, комплекси та забудовників за розташуванням — з фільтрами під ваш запит.',
		},
		{
			icon: 'pi pi-building',
			title: 'Агенції та агенти',
			description:
				'Профілі агенцій, забудовників і агентів поруч із кожним об’єктом — зрозуміло, хто відповідає за угоду.',
		},
	];
}
