import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { NetworkShortComponent } from '../../../components/network/network-short/network-short.component';
import { Network } from '../../../network/network.interface';
import { networks } from '../../../network/network.data';

@Component({
	imports: [NetworkShortComponent, FormsModule, CardModule, InputTextModule],
	templateUrl: './networks.component.html',
	styleUrl: './networks.component.scss',
})
export class NetworksComponent {
	private readonly _router = inject(Router);

	readonly searchTerm = signal('');

	readonly results = computed<Network[]>(() => {
		const term = this.searchTerm().trim().toLowerCase();

		if (!term) return networks;

		return networks.filter((item) => {
			const haystack = [item.name, item.city, item.country]
				.filter(Boolean)
				.join(' ')
				.toLowerCase();
			return haystack.includes(term);
		});
	});

	view(item: Network): void {
		this._router.navigate(['/network', item._id]);
	}
}
