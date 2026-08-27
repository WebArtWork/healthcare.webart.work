import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Developer } from '../../../developer/developer.interface';

@Component({
	selector: 'app-developer-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './developer-icon.component.html',
	styleUrl: './developer-icon.component.scss',
})
export class DeveloperIconComponent {
	@Input() entity!: Developer;
}
