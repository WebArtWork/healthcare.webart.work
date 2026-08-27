import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { User } from '../../../user/user.interface';

@Component({
	selector: 'app-user-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './user-icon.component.html',
	styleUrl: './user-icon.component.scss',
})
export class UserIconComponent {
	@Input() entity!: User;
}
