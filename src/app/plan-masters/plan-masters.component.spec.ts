import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMastersComponent } from './plan-masters.component';

describe('PlanMastersComponent', () => {
  let component: PlanMastersComponent;
  let fixture: ComponentFixture<PlanMastersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanMastersComponent]
    });
    fixture = TestBed.createComponent(PlanMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
