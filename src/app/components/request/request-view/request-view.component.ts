import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { PropertyRequest } from '../../../request/request.interface';

@Component({
	selector: 'app-request-view',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './request-view.component.html',
	styleUrl: './request-view.component.scss',
})
export class RequestViewComponent {
	@Input() entity!: PropertyRequest;
}
