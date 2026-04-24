import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { AstracoreComponent } from '../astracore/astracore.component';
import { BiddingComponent } from '../bidding/bidding.component';
import { DependencyComponent } from '../dependency/dependency.component';

export type ProjectKey = 'astracore' | 'dependency' | 'bidding';

@Component({
  selector: 'app-project-panel',
  imports: [AstracoreComponent, DependencyComponent, BiddingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-panel.component.html',
  styleUrl: './project-panel.component.scss',
})
export class ProjectPanelComponent {
  projectKey = input<ProjectKey | null>(null);

  onClose = output<void>();

  protected readonly isOpen = computed(() => this.projectKey() !== null);
}