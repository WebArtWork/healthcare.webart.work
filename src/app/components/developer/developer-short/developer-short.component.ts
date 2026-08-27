import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Developer } from '../../../developer/developer.interface';

@Component({
	selector: 'app-developer-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './developer-short.component.html',
	styleUrl: './developer-short.component.scss',
})
export class DeveloperShortComponent {
	@Input() entity!: Developer;
}
