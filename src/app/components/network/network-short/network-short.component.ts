import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Network } from '../../../network/network.interface';

const DEFAULT_PHOTO = '/default-network.png';

@Component({
	selector: 'app-network-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './network-short.component.html',
	styleUrl: './network-short.component.scss',
})
export class NetworkShortComponent {
	@Input() entity!: Network;

	get photo(): string {
		return this.entity.logo || DEFAULT_PHOTO;
	}

	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}
}
