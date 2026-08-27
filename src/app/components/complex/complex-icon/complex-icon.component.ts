import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Complex } from '../../../complex/complex.interface';

@Component({
	selector: 'app-complex-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './complex-icon.component.html',
	styleUrl: './complex-icon.component.scss',
})
export class ComplexIconComponent {
	@Input() entity!: Complex;
}
