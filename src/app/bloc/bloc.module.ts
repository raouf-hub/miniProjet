import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocRoutingModule } from './bloc-routing.module';
import { HomeBlocComponent } from './home-bloc/home-bloc.component';
import { ListeBlocEtudiantComponent } from './liste-bloc-etudiant/liste-bloc-etudiant.component';
import { DetailBlocEtudiantComponent } from './detail-bloc-etudiant/detail-bloc-etudiant.component';


@NgModule({
  declarations: [
    HomeBlocComponent,
    ListeBlocEtudiantComponent,
    DetailBlocEtudiantComponent
  ],
  imports: [
    CommonModule,
    BlocRoutingModule
  ]
})
export class BlocModule { }
