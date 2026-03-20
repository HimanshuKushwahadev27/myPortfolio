import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSectionComponent } from './skill-section.component';

describe('SkillSectionComponent', () => {
  let component: SkillSectionComponent;
  let fixture: ComponentFixture<SkillSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
