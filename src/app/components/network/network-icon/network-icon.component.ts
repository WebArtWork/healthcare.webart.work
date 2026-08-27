import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Network } from '../../../network/network.interface';

@Component({
	selector: 'app-network-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './network-icon.component.html',
	styleUrl: './network-icon.component.scss',
})
export class NetworkIconComponent {
	@Input() entity!: Network;
}
