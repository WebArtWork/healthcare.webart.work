import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Network } from '../../../network/network.interface';

@Component({
	selector: 'app-network-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './network-short.component.html',
	styleUrl: './network-short.component.scss',
})
export class NetworkShortComponent {
	@Input() entity!: Network;
}
