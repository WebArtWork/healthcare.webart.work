import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Complex } from '../../../complex/complex.interface';

@Component({
	selector: 'app-complex-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './complex-short.component.html',
	styleUrl: './complex-short.component.scss',
})
export class ComplexShortComponent {
	@Input() entity!: Complex;
}
