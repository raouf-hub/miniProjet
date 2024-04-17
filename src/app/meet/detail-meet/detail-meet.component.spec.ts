import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMeetComponent } from './detail-meet.component';

describe('DetailMeetComponent', () => {
  let component: DetailMeetComponent;
  let fixture: ComponentFixture<DetailMeetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailMeetComponent]
    });
    fixture = TestBed.createComponent(DetailMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
