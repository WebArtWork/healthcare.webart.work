import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AgencyIconComponent } from '../../../components/agency/agency-icon/agency-icon.component';
import { AgentIconComponent } from '../../../components/agent/agent-icon/agent-icon.component';
import { DeveloperIconComponent } from '../../../components/developer/developer-icon/developer-icon.component';
import { Listing } from '../../../listing/listing.interface';
import { listings } from '../../../listing/listing.data';
import { ListingRelations, relationsForListing } from '../../../listing/listing-relations';
import { ListingRelationType } from '../../../components/listing/listing-short/listing-short.component';

type FeedAction = 'favourite' | 'ignore';

/** Fallback image shown when a listing has no photos or its photo fails to load. */
const DEFAULT_PHOTO = '/property-default.svg';

@Component({
	imports: [ButtonModule, AgentIconComponent, AgencyIconComponent, DeveloperIconComponent],
	templateUrl: './feed.component.html',
	styleUrl: './feed.component.scss',
})
export class FeedComponent {
	private readonly _router = inject(Router);

	readonly favouritedIds = signal<Set<string>>(this._restore('favourited'));
	readonly ignoredIds = signal<Set<string>>(this._restore('ignored'));

	readonly feed = computed<{ listing: Listing; relations: ListingRelations }[]>(() => {
		const favourited = this.favouritedIds();
		const ignored = this.ignoredIds();
		return listings
			.filter((item) => !favourited.has(item._id) && !ignored.has(item._id))
			.map((listing) => ({ listing, relations: relationsForListing(listing) }));
	});

	/** Navigates to the listing's detail page. */
	view(item: Listing): void {
		this._router.navigate(['/listing', item._id]);
	}

	/** Navigates to a related entity's detail page without triggering the listing's own click. */
	viewRelation(event: Event, type: ListingRelationType, id: string): void {
		event.stopPropagation();
		this._router.navigate(['/', type, id]);
	}

	/** Marks a listing as favourited or ignored, persisting the choice to localStorage. */
	act(item: Listing, action: FeedAction): void {
		if (action === 'favourite') {
			this._update('favourited', this.favouritedIds, item._id);
		} else {
			this._update('ignored', this.ignoredIds, item._id);
		}
	}

	/** Returns the listing's first photo, falling back to the shared default image. */
	photo(item: Listing): string {
		return item.photos[0] || DEFAULT_PHOTO;
	}

	/** Swaps in the default photo when the listing's image fails to load. */
	onPhotoError(event: Event): void {
		(event.target as HTMLImageElement).src = DEFAULT_PHOTO;
	}

	private _update(
		key: 'favourited' | 'ignored',
		state: ReturnType<typeof signal<Set<string>>>,
		id: string,
	): void {
		const next = new Set(state());
		next.add(id);
		state.set(next);
		this._persist(key, next);
	}

	private _restore(key: 'favourited' | 'ignored'): Set<string> {
		try {
			const raw = localStorage.getItem(`feed:${key}`);
			return raw ? new Set<string>(JSON.parse(raw)) : new Set<string>();
		} catch {
			return new Set<string>();
		}
	}

	private _persist(key: 'favourited' | 'ignored', value: Set<string>): void {
		try {
			localStorage.setItem(`feed:${key}`, JSON.stringify([...value]));
		} catch {
			// ignore storage failures (e.g. private browsing)
		}
	}
}
