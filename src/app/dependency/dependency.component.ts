import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dependency',
  host: {
    id: 'dependency',
    tabindex: '-1',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dependency.component.html',
  styleUrl: './dependency.component.scss',
})
export class DependencyComponent {

}
