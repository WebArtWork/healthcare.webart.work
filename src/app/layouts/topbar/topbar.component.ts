import {
	Component,
	computed,
	inject,
	input,
	output,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { CoreService } from '@wawjs/ngx-core';
import { TranslateService } from '@wawjs/ngx-translate';
import { filter, map, startWith } from 'rxjs';
import { companyProfile } from '../../company/company.data';
import { NavIconComponent } from '../../shared/nav-icon/nav-icon.component';
import { SidebarService } from '../sidebar/sidebar.service';

/** Mirrors the sidebar mode this burger icon represents. */
type BurgerState = 'three-lines' | 'two-lines' | 'one-line' | 'cross';

const BURGER_ICONS: Record<BurgerState, string> = {
	'three-lines': 'bars',
	'two-lines': 'list',
	'one-line': 'minus',
	cross: 'times',
};

@Component({
	selector: 'layout-topbar',
	templateUrl: './topbar.component.html',
	imports: [RouterLink, NavIconComponent],
})
export class TopbarComponent {
	private readonly _coreService = inject(CoreService);
	private readonly _sidebarService = inject(SidebarService);
	private readonly _router = inject(Router);
	readonly translateService = inject(TranslateService);

	readonly company = companyProfile;

	readonly isOpen = input(false);
	readonly sidebarToggler = input(false);
	readonly sidebarOpen = output<boolean>();
	readonly showProfile = input(false);
	readonly viewport = this._coreService.viewport;

	/** Title of the deepest activated route, read from `data.meta.title` (used for the mobile header). */
	readonly pageTitle = toSignal(
		this._router.events.pipe(
			filter((event): event is NavigationEnd => event instanceof NavigationEnd),
			map(() => this._readDeepestRouteTitle()),
			startWith(this._readDeepestRouteTitle()),
		),
		{ initialValue: '' },
	);

	readonly burgerState = computed<BurgerState>(() => {
		if (this._sidebarService.isMobile()) {
			return this._sidebarService.mobileOpen() ? 'cross' : 'three-lines';
		}

		switch (this._sidebarService.webMode()) {
			case 'shown':
				return 'three-lines';
			case 'minimized':
				return 'two-lines';
			case 'hidden':
			default:
				return 'one-line';
		}
	});

	readonly burgerIcon = computed(() => BURGER_ICONS[this.burgerState()]);

	onBurgerClick(): void {
		this._sidebarService.burgerClick();
	}

	private _onBurgerHover: ReturnType<typeof setTimeout> | null = null;
	onBurgerHover(hovered: boolean): void {
		if (this._onBurgerHover) {
			clearTimeout(this._onBurgerHover);
			this._onBurgerHover = null;
		}

		if (hovered) {
			this._sidebarService.onBurgerHover(hovered);
		} else {
			this._onBurgerHover = setTimeout(() => {
				this._sidebarService.onBurgerHover(hovered);
				this._onBurgerHover = null;
			}, 2000);
		}
	}

	/** Walks to the deepest activated route snapshot and reads its `meta.title`. */
	private _readDeepestRouteTitle(): string {
		let snapshot = this._router.routerState.snapshot.root;
		while (snapshot.firstChild) snapshot = snapshot.firstChild;

		return snapshot.data['meta']?.title ?? '';
	}
}
