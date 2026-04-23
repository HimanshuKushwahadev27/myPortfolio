import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingComponent } from './bidding.component';

describe('BiddingComponent', () => {
  let component: BiddingComponent;
  let fixture: ComponentFixture<BiddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiddingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiddingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
