import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { PropertyRequest } from '../../../request/request.interface';

@Component({
	selector: 'app-request-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './request-short.component.html',
	styleUrl: './request-short.component.scss',
})
export class RequestShortComponent {
	@Input() entity!: PropertyRequest;
}
