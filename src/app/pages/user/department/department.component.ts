import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateService } from '@wawjs/ngx-translate';
import { DepartmentViewComponent } from '../../../components/department/department-view/department-view.component';
import { Department } from '../../../department/department.interface';
import { departments } from '../../../department/department.data';

@Component({
	imports: [DepartmentViewComponent, CardModule, ButtonModule],
	templateUrl: './department.component.html',
	styleUrl: './department.component.scss',
})
export class DepartmentComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _messageService = inject(MessageService);
	readonly translateService = inject(TranslateService);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Department | undefined>(() =>
		departments.find((item) => item._id === this._id()),
	);


	share(): void {
		const url = `${window.location.origin}/department/${this._id()}`;
		navigator.clipboard?.writeText(url).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate('Посилання скопійовано')(),
			});
		});
	}
}
