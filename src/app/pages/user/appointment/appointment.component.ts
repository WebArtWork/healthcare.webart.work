import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { AppointmentViewComponent } from '../../../components/appointment/appointment-view/appointment-view.component';
import { Appointment } from '../../../appointment/appointment.interface';
import { appointments } from '../../../appointment/appointment.data';
import { AppointmentRelations, relationsForAppointment } from '../../../appointment/appointment-relations';

@Component({
	imports: [AppointmentViewComponent, CardModule],
	templateUrl: './appointment.component.html',
	styleUrl: './appointment.component.scss',
})
export class AppointmentComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Appointment | undefined>(() =>
		appointments.find((item) => item._id === this._id()),
	);

	readonly relations = computed<AppointmentRelations | null>(() => {
		const appointment = this.entity();
		return appointment ? relationsForAppointment(appointment) : null;
	});

}
