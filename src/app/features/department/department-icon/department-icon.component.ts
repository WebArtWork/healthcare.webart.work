import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Department } from '../department.interface';

@Component({
	selector: 'app-department-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './department-icon.component.html',
	styleUrl: './department-icon.component.scss',
})
export class DepartmentIconComponent {
	@Input() entity!: Department;
}
