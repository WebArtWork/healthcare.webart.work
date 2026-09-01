import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { DepartmentIconComponent } from '../../../features/department/department-icon/department-icon.component';
import { DoctorIconComponent } from '../../../features/doctor/doctor-icon/doctor-icon.component';
import { NetworkIconComponent } from '../../../features/network/network-icon/network-icon.component';
import { Appointment } from '../../../features/appointment/appointment.interface';
import { appointments } from '../../../features/appointment/appointment.data';
import { AppointmentRelations, relationsForAppointment } from '../../../features/appointment/appointment-relations';
import { AppointmentRelationType } from '../../../features/appointment/appointment-short/appointment-short.component';

type FeedAction = 'favourite' | 'ignore';

/** Fallback image shown when a appointment has no photos or its photo fails to load. */
const DEFAULT_PHOTO = '/patient-default.svg';

@Component({
	imports: [ButtonModule, DoctorIconComponent, DepartmentIconComponent, NetworkIconComponent],
	templateUrl: './feed.component.html',
	styleUrl: './feed.component.scss',
})
export class FeedComponent {
	private readonly _router = inject(Router);

	readonly favouritedIds = signal<Set<string>>(this._restore('favourited'));
	readonly ignoredIds = signal<Set<string>>(this._restore('ignored'));

	readonly feed = computed<{ appointment: Appointment; relations: AppointmentRelations }[]>(() => {
		const favourited = this.favouritedIds();
		const ignored = this.ignoredIds();
		return appointments
			.filter((item) => !favourited.has(item._id) && !ignored.has(item._id))
			.map((appointment) => ({ appointment, relations: relationsForAppointment(appointment) }));
	});

	/** Navigates to the appointment's detail page. */
	view(item: Appointment): void {
		this._router.navigate(['/appointment', item._id]);
	}

	/** Navigates to a related entity's detail page without triggering the appointment's own click. */
	viewRelation(event: Event, type: AppointmentRelationType, id: string): void {
		event.stopPropagation();
		this._router.navigate(['/', type, id]);
	}

	/** Marks a appointment as favourited or ignored, persisting the choice to localStorage. */
	act(item: Appointment, action: FeedAction): void {
		if (action === 'favourite') {
			this._update('favourited', this.favouritedIds, item._id);
		} else {
			this._update('ignored', this.ignoredIds, item._id);
		}
	}

	/** Returns the appointment's first attachment, falling back to the shared default image. */
	photo(item: Appointment): string {
		return item.attachments[0] || DEFAULT_PHOTO;
	}

	/** Swaps in the default photo when the appointment's image fails to load. */
	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}

	private _update(
		key: 'favourited' | 'ignored',
		state: ReturnType<typeof signal<Set<string>>>,
		id: string,
	): void {
		const next = new Set(state());
		next.add(id);
		state.set(next);
		this._persist(key, next);
	}

	private _restore(key: 'favourited' | 'ignored'): Set<string> {
		try {
			const raw = localStorage.getItem(`feed:${key}`);
			return raw ? new Set<string>(JSON.parse(raw)) : new Set<string>();
		} catch {
			return new Set<string>();
		}
	}

	private _persist(key: 'favourited' | 'ignored', value: Set<string>): void {
		try {
			localStorage.setItem(`feed:${key}`, JSON.stringify([...value]));
		} catch {
			// ignore storage failures (e.g. private browsing)
		}
	}
}
