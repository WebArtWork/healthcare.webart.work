import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { PropertyRecord } from '../../../record/record.interface';

@Component({
	selector: 'app-record-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './record-short.component.html',
	styleUrl: './record-short.component.scss',
})
export class RecordShortComponent {
	@Input() entity!: PropertyRecord;
}
