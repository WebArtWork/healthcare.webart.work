import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Referral } from '../../../referral/referral.interface';

@Component({
	selector: 'app-referral-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './referral-icon.component.html',
	styleUrl: './referral-icon.component.scss',
})
export class ReferralIconComponent {
	@Input() entity!: Referral;
}
