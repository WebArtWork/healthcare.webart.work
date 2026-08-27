import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Agent } from '../../../agent/agent.interface';

@Component({
	selector: 'app-agent-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './agent-icon.component.html',
	styleUrl: './agent-icon.component.scss',
})
export class AgentIconComponent {
	@Input() entity!: Agent;
}
