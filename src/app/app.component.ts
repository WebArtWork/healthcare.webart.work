import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from '@wawjs/ngx-bos';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ToastModule } from '@wawjs/ngx-prime/toast';
import { SessionBridgeService } from './auth/session-bridge.service';
import { ThemeState } from './theme/theme-state';

@Component({
	imports: [RouterOutlet, ToastModule],
	selector: 'app-root',
	templateUrl: './app.component.html',
	providers: [MessageService],
})
export class AppComponent {
	private readonly _httpService = inject(UserService);
	private readonly _sessionBridge = inject(SessionBridgeService);
	// Injected here (rather than left to whichever lazy page/component happens to use it
	// first, e.g. settings or the footer) so mode/density/radius are restored from storage
	// and applied to <html> as early as possible, instead of flashing default theme first.
	private readonly _themeState = inject(ThemeState);

	constructor() {
		// Pulls a session from another already-logged-in *.webart.work app,
		// if this app doesn't already have a token of its own.
		this._sessionBridge.init();
	}
}
