import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceMastersComponent } from './resource-masters.component';

describe('ResourceMastersComponent', () => {
  let component: ResourceMastersComponent;
  let fixture: ComponentFixture<ResourceMastersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceMastersComponent]
    });
    fixture = TestBed.createComponent(ResourceMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
