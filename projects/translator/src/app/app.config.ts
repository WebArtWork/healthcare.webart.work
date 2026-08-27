import {
	ApplicationConfig,
	provideBrowserGlobalErrorListeners,
	provideZonelessChangeDetection,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import Aura from '@wawjs/css-prime-themes/aura';
import { provideNgxPrime } from '@wawjs/ngx-prime/config';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideHttpClient(),
		provideRouter(routes),
		provideNgxPrime({
			theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } },
		}),
	],
};
