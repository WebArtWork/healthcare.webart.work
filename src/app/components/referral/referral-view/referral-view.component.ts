import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Referral } from '../../../referral/referral.interface';

@Component({
	selector: 'app-referral-view',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './referral-view.component.html',
	styleUrl: './referral-view.component.scss',
})
export class ReferralViewComponent {
	@Input() entity!: Referral;
}
