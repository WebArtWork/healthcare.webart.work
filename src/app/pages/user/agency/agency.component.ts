import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateService } from '@wawjs/ngx-translate';
import { AgencyViewComponent } from '../../../components/agency/agency-view/agency-view.component';
import { Agency } from '../../../agency/agency.interface';
import { agencies } from '../../../agency/agency.data';

@Component({
	imports: [AgencyViewComponent, CardModule, ButtonModule],
	templateUrl: './agency.component.html',
	styleUrl: './agency.component.scss',
})
export class AgencyComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _messageService = inject(MessageService);
	readonly translateService = inject(TranslateService);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Agency | undefined>(() =>
		agencies.find((item) => item._id === this._id()),
	);


	share(): void {
		const url = `${window.location.origin}/agency/${this._id()}`;
		navigator.clipboard?.writeText(url).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate('Посилання скопійовано')(),
			});
		});
	}
}
