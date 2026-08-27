import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateService } from '@wawjs/ngx-translate';
import { DoctorViewComponent } from '../../../components/doctor/doctor-view/doctor-view.component';
import { Doctor } from '../../../doctor/doctor.interface';
import { doctors } from '../../../doctor/doctor.data';

@Component({
	imports: [DoctorViewComponent, CardModule, ButtonModule],
	templateUrl: './doctor.component.html',
	styleUrl: './doctor.component.scss',
})
export class DoctorComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _messageService = inject(MessageService);
	readonly translateService = inject(TranslateService);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Doctor | undefined>(() =>
		doctors.find((item) => item._id === this._id()),
	);


	share(): void {
		const url = `${window.location.origin}/doctor/${this._id()}`;
		navigator.clipboard?.writeText(url).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate('Посилання скопійовано')(),
			});
		});
	}
}
