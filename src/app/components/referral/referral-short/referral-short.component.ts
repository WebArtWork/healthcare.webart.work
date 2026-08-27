import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Referral } from '../../../referral/referral.interface';

@Component({
	selector: 'app-referral-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './referral-short.component.html',
	styleUrl: './referral-short.component.scss',
})
export class ReferralShortComponent {
	@Input() entity!: Referral;
}
