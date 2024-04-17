import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningcoursComponent } from './planningcours.component';

describe('PlanningcoursComponent', () => {
  let component: PlanningcoursComponent;
  let fixture: ComponentFixture<PlanningcoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanningcoursComponent]
    });
    fixture = TestBed.createComponent(PlanningcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
