import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CascadeSelectModule } from '@wawjs/ngx-prime/cascadeselect';

@Component({
	selector: 'uk-cascadeselect-demo',
	imports: [FormsModule, CascadeSelectModule],
	templateUrl: './cascadeselect-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CascadeSelectDemo {
	protected readonly sizes = [undefined, 'small', 'large'] as const;

	protected readonly countries: any[] = [
		{
			name: 'Australia',
			code: 'AU',
			states: [
				{
					name: 'New South Wales',
					cities: [
						{ cname: 'Sydney', code: 'A-SY' },
						{ cname: 'Newcastle', code: 'A-NE' },
					],
				},
				{
					name: 'Queensland',
					cities: [
						{ cname: 'Brisbane', code: 'A-BR' },
						{ cname: 'Cairns', code: 'A-CA' },
					],
				},
			],
		},
		{
			name: 'Canada',
			code: 'CA',
			states: [
				{
					name: 'Ontario',
					cities: [
						{ cname: 'Toronto', code: 'C-TO' },
						{ cname: 'Ottawa', code: 'C-OT' },
					],
				},
				{
					name: 'Quebec',
					cities: [
						{ cname: 'Montreal', code: 'C-MO' },
						{ cname: 'Quebec City', code: 'C-QC' },
					],
				},
			],
		},
	];

	protected readonly selectedCity = signal<{ cname: string; code: string } | undefined>(undefined);
}
