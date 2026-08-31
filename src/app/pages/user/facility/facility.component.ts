import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { FacilityViewComponent } from '../../../features/facility/facility-view/facility-view.component';
import { Facility } from '../../../features/facility/facility.interface';
import { facilities } from '../../../features/facility/facility.data';

@Component({
	imports: [FacilityViewComponent, CardModule],
	templateUrl: './facility.component.html',
	styleUrl: './facility.component.scss',
})
export class FacilityComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Facility | undefined>(() =>
		facilities.find((item) => item._id === this._id()),
	);

}
