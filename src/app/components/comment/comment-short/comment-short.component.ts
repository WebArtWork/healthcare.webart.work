import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { EntityComment } from '../../../comment/comment.interface';

@Component({
	selector: 'app-comment-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './comment-short.component.html',
	styleUrl: './comment-short.component.scss',
})
export class CommentShortComponent {
	@Input() entity!: EntityComment;
}
