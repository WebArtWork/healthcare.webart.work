import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyRecord } from '../../../record/record.interface';
import {
	RECORD_STATUS_LABELS,
	RECORD_TYPE_LABELS,
	RECORD_VISIBILITY_LABELS,
} from '../../../record/record-labels';
import { Property } from '../../../property/property.interface';
import { User } from '../../../user/user.interface';
import { PropertyShortComponent } from '../../property/property-short/property-short.component';
import { UserIconComponent } from '../../user/user-icon/user-icon.component';

@Component({
	selector: 'app-record-view',
	standalone: true,
	imports: [CommonModule, PropertyShortComponent, UserIconComponent],
	templateUrl: './record-view.component.html',
	styleUrl: './record-view.component.scss',
})
export class RecordViewComponent {
	private readonly _router = inject(Router);

	@Input() entity!: PropertyRecord;
	@Input() property?: Property | null;
	@Input() author?: User | null;
	@Input() involvedUsers: User[] = [];

	readonly typeLabels = RECORD_TYPE_LABELS;
	readonly statusLabels = RECORD_STATUS_LABELS;
	readonly visibilityLabels = RECORD_VISIBILITY_LABELS;

	viewProperty(): void {
		if (this.property) this._router.navigate(['/property', this.property._id]);
	}

	viewUser(user: User): void {
		this._router.navigate(['/client', user._id]);
	}
}
