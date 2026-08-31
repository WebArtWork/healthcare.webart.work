import { Injectable, inject } from '@angular/core';
import { environment } from '@env';
import { HttpService } from '@wawjs/ngx-http';
import { Observable, from, switchMap } from 'rxjs';
import { FeedbackSubmission } from './feedback.interface';

@Injectable({ providedIn: 'root' })
export class FeedbackService {
	private readonly _httpService = inject(HttpService);

	submit(payload: FeedbackSubmission): Observable<unknown> {
		return this._httpService.post('/api/companydevelopmentfeedback/create', {
			...payload,
			domain: environment.contact.slug,
		});
	}

	uploadFile(file: File): Observable<{ url: string }> {
		return from(this._readAsDataUrl(file)).pipe(
			switchMap((dataUrl) =>
				this._httpService.post('/api/companydevelopmentfeedback/upload', {
					dataUrl,
					mime: file.type,
					name: file.name,
				}),
			),
		);
	}

	private _readAsDataUrl(file: File): Promise<string> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result as string);
			reader.onerror = () => reject(reader.error);
			reader.readAsDataURL(file);
		});
	}
}
