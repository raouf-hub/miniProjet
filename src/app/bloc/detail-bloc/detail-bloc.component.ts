import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/model/foyer';
import { BlocService } from 'src/app/services/bloc.service';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-detail-bloc',
  templateUrl: './detail-bloc.component.html',
  styleUrls: ['./detail-bloc.component.scss']
})
export class DetailBlocComponent implements OnInit {
  bloc!:any;
  foyers: Foyer[] = [];
  selectedFoyer!: number;


  constructor(private route: ActivatedRoute, private blocService: BlocService ,
     private foyerService:FoyerService, 
     private router:Router
     , private _snackBar: MatSnackBar) {}
  ngOnInit(){
    this.loadFoyers();
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('idBloc');
      if (idParam !== null) {
        const idBloc = +idParam; 
        this.blocService.getBlocById(idBloc).subscribe(bloc=> {
          this.bloc = bloc; 
        });
      } else {
       
      }
    });
  }

  loadFoyers() {
    this.foyerService.getAllFoyers().subscribe(data => {
        this.foyers = data;
    });
}

affecterFoyerAuBloc() {
  console.log('foyer'+this.selectedFoyer);
  if (this.bloc && this.bloc.idBloc && this.selectedFoyer) {
    this.blocService.affecterFoyerBloc(this.selectedFoyer,this.bloc.idBloc)
      .subscribe(
        response => {
          console.log(response);
          this.openSnackBar('Foyer affecté au bloc avec succès', 'Fermer');
          this.router.navigate(['/dashboard/bloc/listBloc']);
          
        },
        error => {
        //  console.error("Erreur lors de l'affectation du foyer au bloc :", error);
          
        }
      );
  } else {
    this.openSnackBar('Erreur lors de l affectation du foyer au bloc ', 'Fermer');
   
  }
  this.openSnackBar('Foyer affecté au bloc avec succès', 'Fermer');
  this.router.navigate(['/dashboard/bloc/listBloc']);
  
}
desaffecterFoyerDuBloc() {
  if (this.bloc && this.bloc.idBloc) {
    this.blocService.desaffecterFoyerBloc(this.bloc.idBloc).subscribe(
      (response: any) => {
        console.log(response);
        this.openSnackBar('Foyer desaffecté avec succès', 'Fermer');
        this.router.navigate(['/dashboard/bloc/listBloc']);
      },
      (error) => {
        console.error("Erreur lors de la désaffectation du foyer du bloc :", error);

      }
    );
  } else {
    
    this.openSnackBar('Erreur lors de désaffectation', 'Fermer');
  }
}


openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 5000, 
  });
}

}
