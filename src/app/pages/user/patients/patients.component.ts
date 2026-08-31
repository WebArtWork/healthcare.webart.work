import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { PatientShortComponent } from '../../../features/patient/patient-short/patient-short.component';
import { Patient } from '../../../features/patient/patient.interface';
import { patients } from '../../../features/patient/patient.data';

@Component({
	imports: [PatientShortComponent, FormsModule, RouterLink, ButtonModule, InputTextModule],
	templateUrl: './patients.component.html',
	styleUrl: './patients.component.scss',
})
export class PatientsComponent {
	private readonly _router = inject(Router);

	readonly searchTerm = signal('');

	readonly results = computed<Patient[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();

		if (!term) return patients;

		return patients.filter((item) => {
			const haystack = [item.fullName, item.address, item.city, item.country]
				.filter(Boolean)
				.join(' ')
				.toLowerCase();
			return haystack.includes(term);
		});
	});

	view(item: Patient): void {
		this._router.navigate(['/patient', item._id]);
	}
}
