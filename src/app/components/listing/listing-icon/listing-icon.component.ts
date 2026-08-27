import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Listing } from '../../../listing/listing.interface';

@Component({
	selector: 'app-listing-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './listing-icon.component.html',
	styleUrl: './listing-icon.component.scss',
})
export class ListingIconComponent {
	@Input() entity!: Listing;
}
