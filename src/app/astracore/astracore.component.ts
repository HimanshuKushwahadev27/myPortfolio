import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-astracore',
  host: {
    id: 'astracore',
    tabindex: '-1',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './astracore.component.html',
  styleUrl: './astracore.component.scss',
})
export class AstracoreComponent {

}
