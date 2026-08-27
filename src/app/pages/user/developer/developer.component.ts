import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateService } from '@wawjs/ngx-translate';
import { DeveloperViewComponent } from '../../../components/developer/developer-view/developer-view.component';
import { Developer } from '../../../developer/developer.interface';
import { developers } from '../../../developer/developer.data';

@Component({
	imports: [DeveloperViewComponent, CardModule, ButtonModule],
	templateUrl: './developer.component.html',
	styleUrl: './developer.component.scss',
})
export class DeveloperComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _messageService = inject(MessageService);
	readonly translateService = inject(TranslateService);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Developer | undefined>(() =>
		developers.find((item) => item._id === this._id()),
	);


	share(): void {
		const url = `${window.location.origin}/developer/${this._id()}`;
		navigator.clipboard?.writeText(url).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate('Посилання скопійовано')(),
			});
		});
	}
}
