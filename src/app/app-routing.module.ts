import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Foyer3dComponent } from './foyer/foyer3d/foyer3d.component';
import { DashboardEtudiantComponent } from './dashboard-etudiant/dashboard-etudiant.component';

const routes: Routes = [
{path: 'dashboard', component: DashboardComponent, children: [
  { path: 'foyer',loadChildren:()=> 
  import('./foyer/foyer.module').then(m=>m.FoyerModule)},
  { path: 'bloc',loadChildren:()=> 
  import('./bloc/bloc.module').then(m=>m.BlocModule)},]},
  {path: 'dashboardEtudiant', component: DashboardEtudiantComponent, children: [
    { path: 'foyer',loadChildren:()=> 
    import('./foyer/foyer.module').then(m=>m.FoyerModule)},
    { path: 'bloc',loadChildren:()=> 
    import('./bloc/bloc.module').then(m=>m.BlocModule)},]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
