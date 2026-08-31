import { isPlatformBrowser } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { palette, updatePreset, updatePrimaryPalette, updateSurfacePalette, usePreset } from '@wawjs/css-prime-styled';
import Aura from '@wawjs/css-prime-themes/aura';
import Lara from '@wawjs/css-prime-themes/lara';
import Nora from '@wawjs/css-prime-themes/nora';
import { NgxPrime } from '@wawjs/ngx-prime/config';

export type MenuMode = 'static' | 'overlay';

const STORAGE_KEY = 'uikit-design-lab-state';

const PRESETS: Record<string, Record<string, unknown>> = {
	Aura: Aura as Record<string, unknown>,
	Lara: Lara as Record<string, unknown>,
	Nora: Nora as Record<string, unknown>,
};

interface PersistedState {
	menuMode?: MenuMode;
	dark?: boolean;
	presetName?: string;
	primaryColorName?: string;
	primaryColorHex?: string;
	surfaceColorName?: string;
	surfaceColorHex?: string;
	borderRadiusScale?: Record<string, string>;
	focusRingWidth?: string;
	focusRingStyle?: string;
	formFieldPaddingX?: string;
	formFieldPaddingY?: string;
	componentTokenOverrides?: Record<string, Record<string, string>>;
	ripple?: boolean;
	inputVariant?: 'outlined' | 'filled';
	darkModeSelector?: string;
	rtl?: boolean;
	zIndexModal?: number;
	ptExampleEnabled?: boolean;
}

function setPath(target: Record<string, unknown>, path: string[], value: unknown): void {
	let cursor = target;
	path.forEach((key, index) => {
		if (index === path.length - 1) {
			cursor[key] = value;
		} else {
			cursor[key] = (cursor[key] as Record<string, unknown>) ?? {};
			cursor = cursor[key] as Record<string, unknown>;
		}
	});
}

/**
 * Shared, app-wide state for the Design Lab (`/design-lab`).
 *
 * Every control on the Design Lab page applies to the running app immediately
 * (no separate "Apply" step) and is persisted to `localStorage` here, so a
 * reload restores the same theme instead of resetting to the base preset.
 * Only fields the user actually touched are ever set (stay `undefined`
 * otherwise) — the topbar's Download Config button reads these to export a
 * diff-only JSON.
 */
@Injectable({ providedIn: 'root' })
export class DesignLabState {
	private readonly ngxPrime = inject(NgxPrime);
	private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

	readonly menuMode = signal<MenuMode>('static');
	readonly dark = signal(false);

	readonly presetName = signal<string | undefined>(undefined);
	readonly primaryColorName = signal<string | undefined>(undefined);
	readonly primaryColorHex = signal<string | undefined>(undefined);
	readonly surfaceColorName = signal<string | undefined>(undefined);
	readonly surfaceColorHex = signal<string | undefined>(undefined);

	readonly borderRadiusScale = signal<Record<string, string> | undefined>(undefined);

	readonly focusRingWidth = signal<string | undefined>(undefined);
	readonly focusRingStyle = signal<string | undefined>(undefined);
	readonly formFieldPaddingX = signal<string | undefined>(undefined);
	readonly formFieldPaddingY = signal<string | undefined>(undefined);

	readonly componentTokenOverrides = signal<Record<string, Record<string, string>>>({});

	readonly ripple = signal<boolean | undefined>(undefined);
	readonly inputVariant = signal<'outlined' | 'filled' | undefined>(undefined);
	readonly darkModeSelector = signal<string | undefined>(undefined);
	readonly rtl = signal<boolean | undefined>(undefined);
	readonly zIndexModal = signal<number | undefined>(undefined);

	readonly ptExampleEnabled = signal(false);

	constructor() {
		if (this.isBrowser) {
			this.restore();
			effect(() => this.persist());
		}
	}

	toggleDarkMode(): void {
		this.dark.update((value) => !value);

		if (this.isBrowser) {
			document.documentElement.classList.toggle('app-dark', this.dark());
		}
	}

	hasChanges(): boolean {
		return (
			this.presetName() !== undefined ||
			this.primaryColorName() !== undefined ||
			this.surfaceColorName() !== undefined ||
			this.borderRadiusScale() !== undefined ||
			this.focusRingWidth() !== undefined ||
			this.focusRingStyle() !== undefined ||
			this.formFieldPaddingX() !== undefined ||
			this.formFieldPaddingY() !== undefined ||
			Object.keys(this.componentTokenOverrides()).length > 0 ||
			this.ripple() !== undefined ||
			this.inputVariant() !== undefined ||
			this.darkModeSelector() !== undefined ||
			this.rtl() !== undefined ||
			this.zIndexModal() !== undefined
		);
	}

	/** Re-applies whatever was persisted last session against the live theme APIs. */
	private restore(): void {
		let stored: PersistedState | null = null;
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			stored = raw ? (JSON.parse(raw) as PersistedState) : null;
		} catch {
			stored = null;
		}

		const dark = stored?.dark ?? window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
		this.dark.set(dark);
		document.documentElement.classList.toggle('app-dark', dark);

		if (!stored) return;

		if (stored.menuMode) this.menuMode.set(stored.menuMode);

		if (stored.presetName && PRESETS[stored.presetName]) {
			usePreset(PRESETS[stored.presetName]);
			this.presetName.set(stored.presetName);
		}
		if (stored.primaryColorHex) {
			updatePrimaryPalette(palette(stored.primaryColorHex));
			this.primaryColorName.set(stored.primaryColorName);
			this.primaryColorHex.set(stored.primaryColorHex);
		}
		if (stored.surfaceColorHex) {
			const shades = palette(stored.surfaceColorHex) as Record<string, string>;
			updateSurfacePalette({ 0: '#ffffff', ...shades });
			this.surfaceColorName.set(stored.surfaceColorName);
			this.surfaceColorHex.set(stored.surfaceColorHex);
		}
		if (stored.borderRadiusScale) {
			updatePreset({ primitive: { borderRadius: stored.borderRadiusScale } });
			this.borderRadiusScale.set(stored.borderRadiusScale);
		}
		if (stored.focusRingWidth !== undefined || stored.focusRingStyle !== undefined) {
			updatePreset({
				semantic: { focusRing: { width: stored.focusRingWidth, style: stored.focusRingStyle } },
			});
			this.focusRingWidth.set(stored.focusRingWidth);
			this.focusRingStyle.set(stored.focusRingStyle);
		}
		if (stored.formFieldPaddingX !== undefined || stored.formFieldPaddingY !== undefined) {
			updatePreset({
				semantic: {
					formField: { paddingX: stored.formFieldPaddingX, paddingY: stored.formFieldPaddingY },
				},
			});
			this.formFieldPaddingX.set(stored.formFieldPaddingX);
			this.formFieldPaddingY.set(stored.formFieldPaddingY);
		}
		if (stored.componentTokenOverrides) {
			for (const [name, fields] of Object.entries(stored.componentTokenOverrides)) {
				const override: Record<string, unknown> = {};
				for (const [path, value] of Object.entries(fields)) {
					setPath(override, path.split('.'), value);
				}
				updatePreset({ components: { [name]: override } });
			}
			this.componentTokenOverrides.set(stored.componentTokenOverrides);
		}
		if (stored.ripple !== undefined) {
			this.ngxPrime.ripple.set(stored.ripple);
			this.ripple.set(stored.ripple);
		}
		if (stored.inputVariant !== undefined) {
			this.ngxPrime.inputVariant.set(stored.inputVariant);
			this.inputVariant.set(stored.inputVariant);
		}
		if (stored.rtl !== undefined) {
			document.documentElement.setAttribute('dir', stored.rtl ? 'rtl' : 'ltr');
			this.rtl.set(stored.rtl);
		}
		if (stored.zIndexModal !== undefined) {
			this.ngxPrime.zIndex.modal = stored.zIndexModal;
			this.zIndexModal.set(stored.zIndexModal);
		}
		if (stored.darkModeSelector !== undefined) {
			this.darkModeSelector.set(stored.darkModeSelector);
		}
		if (stored.ptExampleEnabled !== undefined) {
			this.ptExampleEnabled.set(stored.ptExampleEnabled);
		}
	}

	private persist(): void {
		const state: PersistedState = {
			menuMode: this.menuMode(),
			dark: this.dark(),
			presetName: this.presetName(),
			primaryColorName: this.primaryColorName(),
			primaryColorHex: this.primaryColorHex(),
			surfaceColorName: this.surfaceColorName(),
			surfaceColorHex: this.surfaceColorHex(),
			borderRadiusScale: this.borderRadiusScale(),
			focusRingWidth: this.focusRingWidth(),
			focusRingStyle: this.focusRingStyle(),
			formFieldPaddingX: this.formFieldPaddingX(),
			formFieldPaddingY: this.formFieldPaddingY(),
			componentTokenOverrides: this.componentTokenOverrides(),
			ripple: this.ripple(),
			inputVariant: this.inputVariant(),
			darkModeSelector: this.darkModeSelector(),
			rtl: this.rtl(),
			zIndexModal: this.zIndexModal(),
			ptExampleEnabled: this.ptExampleEnabled(),
		};
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
		} catch {
			// ignore write failures (e.g. storage disabled/full)
		}
	}
}
