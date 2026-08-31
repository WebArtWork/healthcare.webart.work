import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from '@wawjs/ngx-prime/datepicker';

@Component({
	selector: 'uk-datepicker-demo',
	imports: [FormsModule, DatePickerModule],
	templateUrl: './datepicker-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerDemo {
	protected readonly date = signal<Date | null>(new Date());
	protected readonly rangeDates = signal<Date[] | null>(null);
	protected readonly sizes = [undefined, 'small', 'large'] as const;
}
