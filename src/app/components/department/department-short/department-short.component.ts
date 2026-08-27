import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Department } from '../../../department/department.interface';

@Component({
	selector: 'app-department-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './department-short.component.html',
	styleUrl: './department-short.component.scss',
})
export class DepartmentShortComponent {
	@Input() entity!: Department;
}
