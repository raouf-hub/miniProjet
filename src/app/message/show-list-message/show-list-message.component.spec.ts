import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListMessageComponent } from './show-list-message.component';

describe('ShowListMessageComponent', () => {
  let component: ShowListMessageComponent;
  let fixture: ComponentFixture<ShowListMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowListMessageComponent]
    });
    fixture = TestBed.createComponent(ShowListMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
