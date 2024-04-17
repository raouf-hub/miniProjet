import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMeetComponent } from './update-meet.component';

describe('UpdateMeetComponent', () => {
  let component: UpdateMeetComponent;
  let fixture: ComponentFixture<UpdateMeetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateMeetComponent]
    });
    fixture = TestBed.createComponent(UpdateMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
