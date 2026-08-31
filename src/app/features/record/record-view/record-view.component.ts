import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PatientRecord } from '../record.interface';
import {
	RECORD_STATUS_LABELS,
	RECORD_TYPE_LABELS,
	RECORD_VISIBILITY_LABELS,
} from '../record-labels';
import { Patient } from '../../patient/patient.interface';
import { User } from '../../user/user.interface';
import { PatientShortComponent } from '../../patient/patient-short/patient-short.component';
import { UserIconComponent } from '../../user/user-icon/user-icon.component';

@Component({
	selector: 'app-record-view',
	standalone: true,
	imports: [CommonModule, PatientShortComponent, UserIconComponent],
	templateUrl: './record-view.component.html',
	styleUrl: './record-view.component.scss',
})
export class RecordViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: PatientRecord;
	@Input() patient?: Patient | null;
	@Input() author?: User | null;
	@Input() involvedUsers: User[] = [];

	readonly typeLabels = RECORD_TYPE_LABELS;
	readonly statusLabels = RECORD_STATUS_LABELS;
	readonly visibilityLabels = RECORD_VISIBILITY_LABELS;

	viewPatient(): void {
		if (this.patient) this._router.navigate(['/patient', this.patient._id]);
	}

	viewUser(user: User): void {
		this._router.navigate(['/client', user._id]);
	}
}
