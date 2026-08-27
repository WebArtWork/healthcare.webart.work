import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { RecordViewComponent } from '../../../components/record/record-view/record-view.component';
import { PropertyRecord } from '../../../record/record.interface';
import { records } from '../../../record/record.data';
import { Property } from '../../../property/property.interface';
import { properties } from '../../../property/property.data';
import { User } from '../../../user/user.interface';
import { users } from '../../../user/user.data';

const _propertyById = new Map<string, Property>(properties.map((p) => [p._id, p]));
const _userById = new Map<string, User>(users.map((u) => [u._id, u]));

@Component({
	imports: [RecordViewComponent, CardModule],
	templateUrl: './records.component.html',
	styleUrl: './records.component.scss',
})
export class RecordsComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<PropertyRecord | undefined>(() =>
		records.find((item) => item._id === this._id()),
	);

	readonly property = computed<Property | null>(() => {
		const record = this.entity();
		return record ? (_propertyById.get(record.propertyId) ?? null) : null;
	});

	readonly author = computed<User | null>(() => {
		const record = this.entity();
		return record ? (_userById.get(record.authorUserId) ?? null) : null;
	});

	readonly involvedUsers = computed<User[]>(() => {
		const record = this.entity();
		if (!record) return [];
		return record.involvedUserIds
			.map((id) => _userById.get(id))
			.filter((u): u is User => !!u);
	});

}
