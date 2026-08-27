import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { SelectButtonModule } from '@wawjs/ngx-prime/selectbutton';
import { ToggleSwitchModule } from '@wawjs/ngx-prime/toggleswitch';
import { TableModule } from '@wawjs/ngx-prime/table';
import { FormsModule } from '@angular/forms';
import Aura from '@wawjs/css-prime-themes/aura';
import Lara from '@wawjs/css-prime-themes/lara';
import Nora from '@wawjs/css-prime-themes/nora';
import {
	palette,
	updatePreset,
	updatePrimaryPalette,
	updateSurfacePalette,
	usePreset,
} from '@wawjs/css-prime-styled';
import { NgxPrime } from '@wawjs/ngx-prime/config';
import { DesignLabState, type MenuMode } from '../../layout/design-lab-state';

interface SwatchOption {
	name: string;
	color: string;
}

interface PresetOption {
	name: string;
	preset: unknown;
}

interface ComponentTokenField {
	label: string;
	path: string[]; // path within components.<name>.<...>
	value: string;
}

interface ComponentTokenGroup {
	name: string;
	label: string;
	fields: ComponentTokenField[];
}

@Component({
	selector: 'uk-design-lab',
	imports: [
		ButtonModule,
		CardModule,
		InputTextModule,
		SelectButtonModule,
		ToggleSwitchModule,
		TableModule,
		FormsModule,
	],
	templateUrl: './design-lab.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignLab {
	protected readonly designLabState = inject(DesignLabState);
	protected readonly ngxPrime = inject(NgxPrime);

	protected readonly presets: PresetOption[] = [
		{ name: 'Aura', preset: Aura },
		{ name: 'Lara', preset: Lara },
		{ name: 'Nora', preset: Nora },
	];

	protected readonly activePreset = signal(this.designLabState.presetName() ?? 'Aura');
	protected readonly selectedPresetOption = computed(() =>
		this.presets.find((option) => option.name === this.activePreset()),
	);

	protected readonly primaryColors: SwatchOption[] = [
		{ name: 'green', color: '#22c55e' },
		{ name: 'lime', color: '#84cc16' },
		{ name: 'orange', color: '#f97316' },
		{ name: 'amber', color: '#f59e0b' },
		{ name: 'yellow', color: '#eab308' },
		{ name: 'teal', color: '#14b8a6' },
		{ name: 'cyan', color: '#06b6d4' },
		{ name: 'blue', color: '#3b82f6' },
		{ name: 'indigo', color: '#6366f1' },
		{ name: 'violet', color: '#8b5cf6' },
		{ name: 'purple', color: '#a855f7' },
		{ name: 'pink', color: '#ec4899' },
		{ name: 'rose', color: '#f43f5e' },
	];

	protected readonly surfaceColors: SwatchOption[] = [
		{ name: 'slate', color: '#64748b' },
		{ name: 'gray', color: '#6b7280' },
		{ name: 'zinc', color: '#71717a' },
		{ name: 'neutral', color: '#737373' },
		{ name: 'stone', color: '#78716c' },
	];

	protected readonly activePrimary = signal(this.designLabState.primaryColorName() ?? 'blue');
	protected readonly activeSurface = signal(this.designLabState.surfaceColorName());

	protected selectPreset(option: PresetOption): void {
		usePreset(option.preset as Record<string, unknown>);
		this.activePreset.set(option.name);
		this.designLabState.presetName.set(option.name === 'Aura' ? undefined : option.name);
	}

	protected selectPrimary(swatch: SwatchOption): void {
		updatePrimaryPalette(palette(swatch.color));
		this.activePrimary.set(swatch.name);
		this.designLabState.primaryColorName.set(swatch.name);
		this.designLabState.primaryColorHex.set(swatch.color);
	}

	protected selectSurface(swatch: SwatchOption): void {
		const shades = palette(swatch.color) as Record<string, string>;
		updateSurfacePalette({ 0: '#ffffff', ...shades });
		this.activeSurface.set(swatch.name);
		this.designLabState.surfaceColorName.set(swatch.name);
		this.designLabState.surfaceColorHex.set(swatch.color);
	}

	protected readonly menuModeOptions: { label: string; value: MenuMode }[] = [
		{ label: 'Static', value: 'static' },
		{ label: 'Overlay', value: 'overlay' },
	];

	protected setMenuMode(mode: MenuMode): void {
		this.designLabState.menuMode.set(mode);
	}

	// --- Primitive tokens: border radius scale ------------------------------

	protected readonly borderRadiusScale = signal<Record<string, string>>({
		none: '0',
		xs: '2px',
		sm: '4px',
		md: '6px',
		lg: '8px',
		xl: '12px',
		...this.designLabState.borderRadiusScale(),
	});

	protected setBorderRadiusStep(step: string, value: string): void {
		const scale = { ...this.borderRadiusScale(), [step]: value };
		this.borderRadiusScale.set(scale);
		updatePreset({ primitive: { borderRadius: scale } });
		this.designLabState.borderRadiusScale.set({ ...scale });
	}

	// --- Semantic tokens: focus ring + form-field padding --------------------

	protected readonly focusRingWidth = signal(this.designLabState.focusRingWidth() ?? '1px');
	protected readonly focusRingStyleOptions = ['solid', 'dashed', 'none'];
	protected readonly focusRingStyle = signal(this.designLabState.focusRingStyle() ?? 'solid');
	protected readonly formFieldPaddingX = signal(this.designLabState.formFieldPaddingX() ?? '0.75rem');
	protected readonly formFieldPaddingY = signal(this.designLabState.formFieldPaddingY() ?? '0.5rem');

	protected setFocusRingWidth(value: string): void {
		this.focusRingWidth.set(value);
		this.applyFocusRing();
	}

	protected setFocusRingStyle(value: string): void {
		this.focusRingStyle.set(value);
		this.applyFocusRing();
	}

	private applyFocusRing(): void {
		updatePreset({
			semantic: {
				focusRing: { width: this.focusRingWidth(), style: this.focusRingStyle() },
			},
		});
		this.designLabState.focusRingWidth.set(this.focusRingWidth());
		this.designLabState.focusRingStyle.set(this.focusRingStyle());
	}

	protected setFormFieldPaddingX(value: string): void {
		this.formFieldPaddingX.set(value);
		this.applyFormFieldPadding();
	}

	protected setFormFieldPaddingY(value: string): void {
		this.formFieldPaddingY.set(value);
		this.applyFormFieldPadding();
	}

	private applyFormFieldPadding(): void {
		updatePreset({
			semantic: {
				formField: {
					paddingX: this.formFieldPaddingX(),
					paddingY: this.formFieldPaddingY(),
				},
			},
		});
		this.designLabState.formFieldPaddingX.set(this.formFieldPaddingX());
		this.designLabState.formFieldPaddingY.set(this.formFieldPaddingY());
	}

	// --- Component tokens: representative subset (button/card/table) --------
	//
	// Full per-component editing across all ~90 uikit components is out of
	// scope for this pass — see ROADMAP.md section 2. This is a documented
	// example of the pattern (search/filter over a token tree) scoped to three
	// representative components instead.

	protected readonly componentTokenSearch = signal('');

	protected readonly componentTokenGroups = signal<ComponentTokenGroup[]>(
		[
			{
				name: 'button',
				label: 'Button',
				fields: [
					{ label: 'Root border radius', path: ['root', 'borderRadius'], value: '6px' },
					{ label: 'Root gap', path: ['root', 'gap'], value: '0.5rem' },
				],
			},
			{
				name: 'card',
				label: 'Card',
				fields: [
					{ label: 'Body padding', path: ['root', 'body', 'padding'], value: '1.25rem' },
					{ label: 'Body gap', path: ['root', 'body', 'gap'], value: '0.5rem' },
				],
			},
			{
				name: 'datatable',
				label: 'Table',
				fields: [
					{ label: 'Header cell padding', path: ['header', 'cell', 'padding'], value: '0.75rem 1rem' },
					{ label: 'Body cell padding', path: ['bodyCell', 'padding'], value: '0.75rem 1rem' },
				],
			},
		].map((group) => ({
			...group,
			fields: group.fields.map((field) => ({
				...field,
				value: this.designLabState.componentTokenOverrides()[group.name]?.[field.path.join('.')] ?? field.value,
			})),
		})),
	);

	protected filteredComponentTokenGroups(): ComponentTokenGroup[] {
		const term = this.componentTokenSearch().trim().toLowerCase();
		const groups = this.componentTokenGroups();
		if (!term) return groups;
		return groups
			.map((group) => ({
				...group,
				fields: group.fields.filter(
					(field) =>
						group.label.toLowerCase().includes(term) || field.label.toLowerCase().includes(term),
				),
			}))
			.filter((group) => group.fields.length > 0);
	}

	protected setComponentTokenValue(group: ComponentTokenGroup, fieldPath: string[], value: string): void {
		this.componentTokenGroups.update((groups) =>
			groups.map((g) =>
				g.name !== group.name
					? g
					: {
							...g,
							fields: g.fields.map((field) =>
								field.path.join('.') === fieldPath.join('.') ? { ...field, value } : field,
							),
						},
			),
		);

		const override: Record<string, unknown> = {};
		let cursor = override;
		fieldPath.forEach((key, index) => {
			if (index === fieldPath.length - 1) {
				cursor[key] = value;
			} else {
				cursor[key] = {};
				cursor = cursor[key] as Record<string, unknown>;
			}
		});
		updatePreset({ components: { [group.name]: override } });
		this.designLabState.componentTokenOverrides.update((overrides) => ({
			...overrides,
			[group.name]: { ...(overrides[group.name] ?? {}), [fieldPath.join('.')]: value },
		}));
	}

	// --- Global config --------------------------------------------------------

	protected readonly inputVariantOptions = ['outlined', 'filled'];

	protected toggleRipple(value: boolean): void {
		this.ngxPrime.ripple.set(value);
		this.designLabState.ripple.set(value);
	}

	protected setInputVariant(value: 'outlined' | 'filled'): void {
		this.ngxPrime.inputVariant.set(value);
		this.designLabState.inputVariant.set(value);
	}

	protected readonly darkModeSelectorValue = signal(this.designLabState.darkModeSelector() ?? '.app-dark');

	protected setDarkModeSelector(value: string): void {
		this.darkModeSelectorValue.set(value);
		// Re-applying the theme options updates the selector the ThemeProvider
		// watches for dark mode; the demo app itself still toggles `.app-dark`.
		usePreset(this.presets.find((preset) => preset.name === this.activePreset())?.preset as any);
		this.designLabState.darkModeSelector.set(value);
	}

	protected readonly rtl = signal(this.designLabState.rtl() ?? false);

	protected toggleRtl(value: boolean): void {
		this.rtl.set(value);
		document.documentElement.setAttribute('dir', value ? 'rtl' : 'ltr');
		this.designLabState.rtl.set(value);
	}

	protected readonly zIndexModal = signal(this.designLabState.zIndexModal() ?? 1100);

	protected setZIndexModal(value: number): void {
		this.zIndexModal.set(value);
		this.ngxPrime.zIndex.modal = value;
		this.designLabState.zIndexModal.set(value);
	}

	// --- Pass-through (pt) preview --------------------------------------------

	protected readonly ptExampleEnabled = signal(this.designLabState.ptExampleEnabled());

	protected readonly ptExample = {
		root: { style: 'border-width: 2px; border-style: dashed;' },
		label: { style: 'font-style: italic;' },
	};

	protected togglePtExample(value: boolean): void {
		this.ptExampleEnabled.set(value);
		this.designLabState.ptExampleEnabled.set(value);
	}
}
