import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-update-foyer',
  templateUrl: './update-foyer.component.html',
  styleUrls: ['./update-foyer.component.scss']
})
export class UpdateFoyerComponent implements OnInit{
  constructor(private foyerService: FoyerService,  private ac:ActivatedRoute 
    , private router:Router , private _snackBar: MatSnackBar){}
  foyer !:any;
  ngOnInit (){
    this.ac.paramMap.subscribe(next=>this.foyerService.getFoyerById(Number(next.get('idFoyer')))
    .subscribe(res=>{this.foyer=res}), 
    error=>console.log(error));
    }
  
    update(){
      this.foyerService.updateFoyer(this.foyer.idFoyer,this.foyer).subscribe();
      this.openSnackBar('Foyer modifié avec succès', 'Fermer');
      this.router.navigate(['/dashboard/foyer/listFoyer']);
    }
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 5000, 
      });
    }
}
