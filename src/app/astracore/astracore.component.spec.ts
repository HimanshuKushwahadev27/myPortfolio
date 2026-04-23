import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstracoreComponent } from './astracore.component';

describe('AstracoreComponent', () => {
  let component: AstracoreComponent;
  let fixture: ComponentFixture<AstracoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstracoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstracoreComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
