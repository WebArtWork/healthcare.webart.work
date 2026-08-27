import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { PropertyViewComponent } from '../../../components/property/property-view/property-view.component';
import { Property } from '../../../property/property.interface';
import { properties } from '../../../property/property.data';
import { PropertyRelations, relationsForProperty } from '../../../property/property-relations';

@Component({
	imports: [PropertyViewComponent, CardModule],
	templateUrl: './property.component.html',
	styleUrl: './property.component.scss',
})
export class PropertyComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Property | undefined>(() =>
		properties.find((item) => item._id === this._id()),
	);

	readonly relations = computed<PropertyRelations | null>(() => {
		const property = this.entity();
		return property ? relationsForProperty(property) : null;
	});

}
