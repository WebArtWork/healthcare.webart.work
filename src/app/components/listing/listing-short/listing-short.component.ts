import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Listing } from '../../../listing/listing.interface';
import { Department } from '../../../department/department.interface';
import { Doctor } from '../../../doctor/doctor.interface';
import { Facility } from '../../../facility/facility.interface';
import { Network } from '../../../network/network.interface';
import { DepartmentIconComponent } from '../../department/department-icon/department-icon.component';
import { DoctorIconComponent } from '../../doctor/doctor-icon/doctor-icon.component';
import { FacilityIconComponent } from '../../facility/facility-icon/facility-icon.component';
import { NetworkIconComponent } from '../../network/network-icon/network-icon.component';

export type ListingRelationType = 'doctor' | 'department' | 'network' | 'facility';

@Component({
	selector: 'app-listing-short',
	standalone: true,
	imports: [CommonModule, DepartmentIconComponent, DoctorIconComponent, FacilityIconComponent, NetworkIconComponent],
	templateUrl: './listing-short.component.html',
	styleUrl: './listing-short.component.scss',
})
export class ListingShortComponent {
	@Input() entity!: Listing;
	@Input() department?: Department | null;
	@Input() network?: Network | null;
	@Input() doctor?: Doctor | null;
	@Input() facility?: Facility | null;

	/** Emitted instead of navigating directly, so the host page can stop the card's own click. */
	@Output() relationClick = new EventEmitter<{ type: ListingRelationType; id: string }>();

	onRelationClick(event: Event, type: ListingRelationType, id: string): void {
		event.stopPropagation();
		this.relationClick.emit({ type, id });
	}
}
