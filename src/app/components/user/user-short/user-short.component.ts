import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { User } from '../../../user/user.interface';

@Component({
	selector: 'app-user-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './user-short.component.html',
	styleUrl: './user-short.component.scss',
})
export class UserShortComponent {
	@Input() entity!: User;
}
