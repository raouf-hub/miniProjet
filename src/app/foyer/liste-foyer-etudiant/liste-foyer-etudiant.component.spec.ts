import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFoyerEtudiantComponent } from './liste-foyer-etudiant.component';

describe('ListeFoyerEtudiantComponent', () => {
  let component: ListeFoyerEtudiantComponent;
  let fixture: ComponentFixture<ListeFoyerEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeFoyerEtudiantComponent]
    });
    fixture = TestBed.createComponent(ListeFoyerEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
