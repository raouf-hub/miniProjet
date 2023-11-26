import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtudiantService } from './services/etudiant.service';
import { AddBlocComponent } from './bloc/add-bloc/add-bloc.component';
import { UpdateBlocComponent } from './bloc/update-bloc/update-bloc.component';
import { ListeBlocComponent } from './bloc/liste-bloc/liste-bloc.component';
import { DetailBlocComponent } from './bloc/detail-bloc/detail-bloc.component';
import { FoyerService } from './services/foyer.service';
import { ListeFoyerComponent } from './foyer/liste-foyer/liste-foyer.component';
import { AddFoyerComponent } from './foyer/add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from './foyer/update-foyer/update-foyer.component';
import { DetailFoyerComponent } from './foyer/detail-foyer/detail-foyer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { Foyer3dComponent } from './foyer/foyer3d/foyer3d.component';
import { DashboardEtudiantComponent } from './dashboard-etudiant/dashboard-etudiant.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    ListeFoyerComponent,
    AddFoyerComponent,
    UpdateFoyerComponent,
    DetailFoyerComponent,
    AddBlocComponent,
    UpdateBlocComponent,
    ListeBlocComponent,
    DetailBlocComponent,
    DashboardComponent,
    Foyer3dComponent,
    DashboardEtudiantComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
   NgChartsModule,
   RouterModule,
   
  ],
  providers: [EtudiantService, FoyerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
