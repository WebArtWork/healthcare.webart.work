import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { EntityComment } from '../../../comment/comment.interface';

@Component({
	selector: 'app-comments-view',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './comments-view.component.html',
	styleUrl: './comments-view.component.scss',
})
export class CommentsViewComponent {
	@Input() entity!: EntityComment;
}
