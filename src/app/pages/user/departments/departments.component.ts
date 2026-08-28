import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { DepartmentShortComponent } from '../../../components/department/department-short/department-short.component';
import { Department } from '../../../department/department.interface';
import { departments } from '../../../department/department.data';

@Component({
	imports: [DepartmentShortComponent, FormsModule, InputTextModule],
	templateUrl: './departments.component.html',
	styleUrl: './departments.component.scss',
})
export class DepartmentsComponent {
	private readonly _router = inject(Router);

	readonly searchTerm = signal('');

	readonly results = computed<Department[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();

		if (!term) return departments;

		return departments.filter((item) => {
			const haystack = [item.name, item.city, item.country]
				.filter(Boolean)
				.join(' ')
				.toLowerCase();
			return haystack.includes(term);
		});
	});

	view(item: Department): void {
		this._router.navigate(['/department', item._id]);
	}
}
