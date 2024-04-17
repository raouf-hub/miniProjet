import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-update-message',
  templateUrl: './update-message.component.html',
  styleUrls: ['./update-message.component.scss']
})
export class UpdateMessageComponent implements OnInit {
  constructor(private messageService: MessageService,  private ac:ActivatedRoute 
    , private router:Router , private _snackBar: MatSnackBar){}
 messageToUpdate !:any;
  notif=new EventEmitter();
  ngOnInit() {
    this.ac.paramMap.subscribe(next => {
      const messageID = Number(next.get('messageID'));
      console.log('message ID:', messageID); // Vérifiez si l'ID extrait est correct
      this.messageService.getMessage(messageID).subscribe(
        res => {
          this.messageToUpdate = res;
        },
        error => {
          console.log(error);
        }
      );
    });
  }
  
  update() {
    this.messageService.updateMessage(this.messageToUpdate.messageID, this.messageToUpdate).subscribe(
      () => {
        this.notif.emit('updated');
        this.openSnackBar('message successfully modified', 'Close');
        this.router.navigate(['/listMessage']);
      },
      (error) => {
        console.error('Error updating message:', error);
        // Gérer l'erreur ici, par exemple afficher un message à l'utilisateur
      }
    );
  }
  
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 5000, 
      });
    }
}

 
