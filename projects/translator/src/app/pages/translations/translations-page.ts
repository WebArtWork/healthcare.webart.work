import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from '@wawjs/ngx-prime/table';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { ToggleSwitchModule } from '@wawjs/ngx-prime/toggleswitch';
import { TranslationRow, TranslationsState } from '../../translations/translations.state';

@Component({
	selector: 'tr-translations-page',
	imports: [FormsModule, TableModule, TagModule, ButtonModule, InputTextModule, ToggleSwitchModule],
	templateUrl: './translations-page.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslationsPage {
	protected readonly translationsState = inject(TranslationsState);

	protected readonly filterText = signal('');
	protected readonly onlyIssues = signal(false);
	protected readonly onlyModified = signal(false);

	/**
	 * `p-table` tracks rows by object identity by default. `setValue()`
	 * replaces the edited row with a new object on every keystroke, so
	 * without this the table would recreate that row's DOM (and its
	 * `<input>`, dropping focus) on every character typed.
	 */
	protected readonly trackByIndex = (_index: number, row: TranslationRow): number => row.index;

	protected filteredRows(): TranslationRow[] {
		const term = this.filterText().trim().toLowerCase();
		const onlyIssues = this.onlyIssues();
		const onlyModified = this.onlyModified();
		const lang = this.translationsState.selectedLanguage();
		return this.translationsState.rows().filter((row) => {
			if (onlyIssues && !row.missing.includes(lang) && !row.untranslated.includes(lang)) return false;
			if (onlyModified && !this.translationsState.isRowModified(row)) return false;
			if (!term) return true;
			return row.key.toLowerCase().includes(term) || (row.values[lang] ?? '').toLowerCase().includes(term);
		});
	}

	protected setValue(row: TranslationRow, langCode: string, value: string): void {
		this.translationsState.setValue(row, langCode, value);
	}

	protected reset(): void {
		this.translationsState.reset();
	}

	protected selectedLanguageName(): string {
		const code = this.translationsState.selectedLanguage();
		return this.translationsState.languages.find((lang) => lang.code === code)?.name ?? code;
	}
}
