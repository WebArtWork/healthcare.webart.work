import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Listing } from '../../../listing/listing.interface';
import { Agency } from '../../../agency/agency.interface';
import { Agent } from '../../../agent/agent.interface';
import { Complex } from '../../../complex/complex.interface';
import { Developer } from '../../../developer/developer.interface';
import { AgencyIconComponent } from '../../agency/agency-icon/agency-icon.component';
import { AgentIconComponent } from '../../agent/agent-icon/agent-icon.component';
import { ComplexIconComponent } from '../../complex/complex-icon/complex-icon.component';
import { DeveloperIconComponent } from '../../developer/developer-icon/developer-icon.component';

export type ListingRelationType = 'agent' | 'agency' | 'developer' | 'complex';

@Component({
	selector: 'app-listing-short',
	standalone: true,
	imports: [CommonModule, AgencyIconComponent, AgentIconComponent, ComplexIconComponent, DeveloperIconComponent],
	templateUrl: './listing-short.component.html',
	styleUrl: './listing-short.component.scss',
})
export class ListingShortComponent {
	@Input() entity!: Listing;
	@Input() agency?: Agency | null;
	@Input() developer?: Developer | null;
	@Input() agent?: Agent | null;
	@Input() complex?: Complex | null;

	/** Emitted instead of navigating directly, so the host page can stop the card's own click. */
	@Output() relationClick = new EventEmitter<{ type: ListingRelationType; id: string }>();

	onRelationClick(event: Event, type: ListingRelationType, id: string): void {
		event.stopPropagation();
		this.relationClick.emit({ type, id });
	}
}
