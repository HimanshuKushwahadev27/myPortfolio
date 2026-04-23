import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyComponent } from './dependency.component';

describe('DependencyComponent', () => {
  let component: DependencyComponent;
  let fixture: ComponentFixture<DependencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependencyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependencyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
