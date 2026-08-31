import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { NetworkShortComponent } from '../../../features/network/network-short/network-short.component';
import { Network } from '../../../features/network/network.interface';
import { networks } from '../../../features/network/network.data';

@Component({
	imports: [NetworkShortComponent, FormsModule, InputTextModule],
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
