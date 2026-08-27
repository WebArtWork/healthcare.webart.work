import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Listing } from '../../../listing/listing.interface';
import { Department } from '../../../department/department.interface';
import { Doctor } from '../../../doctor/doctor.interface';
import { Complex } from '../../../complex/complex.interface';
import { Developer } from '../../../developer/developer.interface';
import { DepartmentIconComponent } from '../../department/department-icon/department-icon.component';
import { DoctorIconComponent } from '../../doctor/doctor-icon/doctor-icon.component';
import { ComplexIconComponent } from '../../complex/complex-icon/complex-icon.component';
import { DeveloperIconComponent } from '../../developer/developer-icon/developer-icon.component';

export type ListingRelationType = 'doctor' | 'department' | 'developer' | 'complex';

@Component({
	selector: 'app-listing-short',
	standalone: true,
	imports: [CommonModule, DepartmentIconComponent, DoctorIconComponent, ComplexIconComponent, DeveloperIconComponent],
	templateUrl: './listing-short.component.html',
	styleUrl: './listing-short.component.scss',
})
export class ListingShortComponent {
	@Input() entity!: Listing;
	@Input() department?: Department | null;
	@Input() developer?: Developer | null;
	@Input() doctor?: Doctor | null;
	@Input() complex?: Complex | null;

	/** Emitted instead of navigating directly, so the host page can stop the card's own click. */
	@Output() relationClick = new EventEmitter<{ type: ListingRelationType; id: string }>();

	onRelationClick(event: Event, type: ListingRelationType, id: string): void {
		event.stopPropagation();
		this.relationClick.emit({ type, id });
	}
}
