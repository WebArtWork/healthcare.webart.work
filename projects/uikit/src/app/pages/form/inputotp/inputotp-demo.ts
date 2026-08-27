import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from '@wawjs/ngx-prime/inputotp';

@Component({
	selector: 'uk-inputotp-demo',
	imports: [FormsModule, InputOtpModule],
	templateUrl: './inputotp-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputOtpDemo {
	protected readonly sizes = [undefined, 'small', 'large'] as const;
	protected readonly otp = signal('');
}
