import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarService } from '../sidebar/sidebar.service';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
	templateUrl: './user.component.html',
	styleUrl: './user.component.scss',
	imports: [RouterOutlet, TopbarComponent, SidebarComponent, MobileNavComponent, FooterComponent],
})
export class UserComponent {
	readonly sidebar = inject(SidebarService);
	private readonly _router = inject(Router);

	/** Footer only appears on the landing page, not on every other page. */
	readonly isLandingPage = toSignal(
		this._router.events.pipe(
			filter((event): event is NavigationEnd => event instanceof NavigationEnd),
			map((event) => event.urlAfterRedirects === '/'),
			startWith(this._router.url === '/'),
		),
		{ initialValue: false },
	);
}
