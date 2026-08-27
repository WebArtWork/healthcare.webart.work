import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CardModule } from '@wawjs/ngx-prime/card';
import { ComplexViewComponent } from '../../../components/complex/complex-view/complex-view.component';
import { Complex } from '../../../complex/complex.interface';
import { complexes } from '../../../complex/complex.data';

@Component({
	imports: [ComplexViewComponent, CardModule],
	templateUrl: './complex.component.html',
	styleUrl: './complex.component.scss',
})
export class ComplexComponent {
	private readonly _route = inject(ActivatedRoute);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Complex | undefined>(() =>
		complexes.find((item) => item._id === this._id()),
	);

}
