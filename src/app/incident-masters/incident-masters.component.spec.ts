import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentMastersComponent } from './incident-masters.component';

describe('IncidentMastersComponent', () => {
  let component: IncidentMastersComponent;
  let fixture: ComponentFixture<IncidentMastersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidentMastersComponent]
    });
    fixture = TestBed.createComponent(IncidentMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
