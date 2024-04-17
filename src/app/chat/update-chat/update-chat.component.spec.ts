import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChatComponent } from './update-chat.component';

describe('UpdateChatComponent', () => {
  let component: UpdateChatComponent;
  let fixture: ComponentFixture<UpdateChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateChatComponent]
    });
    fixture = TestBed.createComponent(UpdateChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
