import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CheckboxModule } from '@wawjs/ngx-prime/checkbox';
import { DatePickerModule } from '@wawjs/ngx-prime/datepicker';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { PasswordModule } from '@wawjs/ngx-prime/password';
import { SelectModule } from '@wawjs/ngx-prime/select';

@Component({
	selector: 'uk-form-layout-demo',
	imports: [FormsModule, ButtonModule, CheckboxModule, DatePickerModule, InputTextModule, PasswordModule, SelectModule],
	templateUrl: './form-layout-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLayoutDemo {
	protected readonly firstName = signal('');
	protected readonly lastName = signal('');
	protected readonly email = signal('');
	protected readonly password = signal('');
	protected readonly birthDate = signal<Date | null>(null);
	protected readonly country = signal<{ name: string; code: string } | undefined>(undefined);
	protected readonly acceptTerms = signal(false);
	protected readonly submitted = signal(false);

	protected readonly countries = [
		{ name: 'United States', code: 'US' },
		{ name: 'Germany', code: 'DE' },
		{ name: 'Japan', code: 'JP' },
	];

	protected submit(): void {
		this.submitted.set(true);
	}
}
