import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AddEtudiantComponent } from './etudiant/add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './etudiant/update-etudiant/update-etudiant.component';
import { DetailEtudiantComponent } from './etudiant/detail-etudiant/detail-etudiant.component';
import { DeleteEtudiantComponent } from './etudiant/delete-etudiant/delete-etudiant.component';
import { ListeEtudiantComponent } from './etudiant/liste-etudiant/liste-etudiant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtudiantService } from './services/etudiant.service';
import { AddFoyerComponent } from './foyer/add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from './foyer/update-foyer/update-foyer.component';
import { DeleteFoyerComponent } from './foyer/delete-foyer/delete-foyer.component';
import { ListeFoyerComponent } from './foyer/liste-foyer/liste-foyer.component';
import { DetailFoyerComponent } from './foyer/detail-foyer/detail-foyer.component';
import { AddUniversiteComponent } from './universite/add-universite/add-universite.component';
import { UpdateUniversiteComponent } from './universite/update-universite/update-universite.component';
import { ListeUniversiteComponent } from './universite/liste-universite/liste-universite.component';
import { DeleteUniversiteComponent } from './universite/delete-universite/delete-universite.component';
import { DetailUniversiteComponent } from './universite/detail-universite/detail-universite.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    HomeComponent,
    AddEtudiantComponent,
    UpdateEtudiantComponent,
    DetailEtudiantComponent,
    DeleteEtudiantComponent,
    ListeEtudiantComponent,
    AddFoyerComponent,
    UpdateFoyerComponent,
    DeleteFoyerComponent,
    ListeFoyerComponent,
    DetailFoyerComponent,
    AddUniversiteComponent,
    UpdateUniversiteComponent,
    ListeUniversiteComponent,
    DeleteUniversiteComponent,
    DetailUniversiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EtudiantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
