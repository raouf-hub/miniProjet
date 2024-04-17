import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningMeetComponent } from './planning-meet.component';

describe('PlanningMeetComponent', () => {
  let component: PlanningMeetComponent;
  let fixture: ComponentFixture<PlanningMeetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanningMeetComponent]
    });
    fixture = TestBed.createComponent(PlanningMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
