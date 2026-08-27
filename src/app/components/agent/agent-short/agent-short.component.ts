import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Agent } from '../../../agent/agent.interface';

@Component({
	selector: 'app-agent-short',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './agent-short.component.html',
	styleUrl: './agent-short.component.scss',
})
export class AgentShortComponent {
	@Input() entity!: Agent;
}
