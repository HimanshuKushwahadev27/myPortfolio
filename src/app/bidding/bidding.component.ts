import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bidding',
  host: {
    id: 'bidding',
    tabindex: '-1',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bidding.component.html',
  styleUrl: './bidding.component.scss',
})
export class BiddingComponent {

}
