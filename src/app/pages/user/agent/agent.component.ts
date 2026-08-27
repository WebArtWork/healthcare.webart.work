import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TranslateService } from '@wawjs/ngx-translate';
import { AgentViewComponent } from '../../../components/agent/agent-view/agent-view.component';
import { Agent } from '../../../agent/agent.interface';
import { agents } from '../../../agent/agent.data';

@Component({
	imports: [AgentViewComponent, CardModule, ButtonModule],
	templateUrl: './agent.component.html',
	styleUrl: './agent.component.scss',
})
export class AgentComponent {
	private readonly _route = inject(ActivatedRoute);
	private readonly _messageService = inject(MessageService);
	readonly translateService = inject(TranslateService);

	private readonly _id = toSignal(
		this._route.paramMap.pipe(map((params) => params.get('id'))),
		{ initialValue: null },
	);

	readonly entity = computed<Agent | undefined>(() =>
		agents.find((item) => item._id === this._id()),
	);


	share(): void {
		const url = `${window.location.origin}/agent/${this._id()}`;
		navigator.clipboard?.writeText(url).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate('Посилання скопійовано')(),
			});
		});
	}
}
