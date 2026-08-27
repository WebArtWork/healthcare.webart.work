import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { PropertyRequest } from '../../../request/request.interface';

@Component({
	selector: 'app-request-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './request-icon.component.html',
	styleUrl: './request-icon.component.scss',
})
export class RequestIconComponent {
	@Input() entity!: PropertyRequest;
}
