import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { PatientViewComponent } from '../../../features/patient/patient-view/patient-view.component';
import { Patient } from '../../../features/patient/patient.interface';
import { patients } from '../../../features/patient/patient.data';
import { PatientRelations, relationsForPatient } from '../../../features/patient/patient-relations';

@Component({
	imports: [PatientViewComponent, CardModule],
	templateUrl: './patient.component.html',
	styleUrl: './patient.component.scss',
})
export class PatientComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Patient | undefined>(() =>
		patients.find((item) => item._id === this._id()),
	);

	readonly relations = computed<PatientRelations | null>(() => {
		const patient = this.entity();
		return patient ? relationsForPatient(patient) : null;
	});

}
