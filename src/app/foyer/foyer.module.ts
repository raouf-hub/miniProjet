import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoyerRoutingModule } from './foyer-routing.module';
import { HomeFoyerComponent } from './home-foyer/home-foyer.component';
import { ListeFoyerEtudiantComponent } from './liste-foyer-etudiant/liste-foyer-etudiant.component';



@NgModule({
  declarations: [
    HomeFoyerComponent,
    ListeFoyerEtudiantComponent
  ],
  imports: [
    CommonModule,
    FoyerRoutingModule,

  ]
})
export class FoyerModule { }
