import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TerminalModule, TerminalService } from '@wawjs/ngx-prime/terminal';
import type { Subscription } from 'rxjs';

@Component({
	selector: 'uk-terminal-demo',
	imports: [TerminalModule],
	providers: [TerminalService],
	templateUrl: './terminal-demo.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TerminalDemo implements OnInit, OnDestroy {
	private readonly terminalService = inject(TerminalService);
	private subscription?: Subscription;

	ngOnInit(): void {
		this.subscription = this.terminalService.commandHandler.subscribe((command) => {
			this.terminalService.sendResponse(`Unknown command: ${command}`);
		});
	}

	ngOnDestroy(): void {
		this.subscription?.unsubscribe();
	}
}
