import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from '@wawjs/ngx-prime/password';

@Component({
	selector: 'uk-password-demo',
	imports: [FormsModule, PasswordModule],
	templateUrl: './password-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordDemo {
	protected readonly value = signal('');
}
