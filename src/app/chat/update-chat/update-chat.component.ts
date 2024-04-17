import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Chat } from 'src/app/model/Chat';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-update-chat',
  templateUrl: './update-chat.component.html',
  styleUrls: ['./update-chat.component.scss']
})
export class UpdateChatComponent implements OnInit {
  constructor(private chatService: ChatService,  private ac:ActivatedRoute 
    , private router:Router , private _snackBar: MatSnackBar){}
 chatToUpdate !:any;
  notif=new EventEmitter();
  ngOnInit() {
    this.ac.paramMap.subscribe(next => {
      const chatID = Number(next.get('chatID'));
      console.log('Chat ID:', chatID); // Vérifiez si l'ID extrait est correct
      this.chatService.getChat(chatID).subscribe(
        res => {
          this.chatToUpdate = res;
        },
        error => {
          console.log(error);
        }
      );
    });
  }
  
  
  
  update() {
    this.chatService.updateChat(this.chatToUpdate.chatID, this.chatToUpdate).subscribe(
      () => {
        this.notif.emit('updated');
        this.openSnackBar('Chat successfully modified', 'Close');
        this.router.navigate(['/listChat']);
      },
      (error) => {
        console.error('Error updating chat:', error);
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

  // chatForm: FormGroup;
  // chat: Chat | undefined;

  // constructor(
  //   private route: ActivatedRoute,
  //   private chatService: ChatService,
  //   private location: Location,
  //   private formBuilder: FormBuilder , 
  //   private router: Router,
  // ) {
  //   this.chatForm = this.formBuilder.group({
  //     title: ['', Validators.required]
  //   });
  // }

  // ngOnInit(): void {
  //   this.getChat();
  // }

  // getChat(): void {
  //   const chatID = Number(this.route.snapshot.paramMap.get('ChatID'));
  //   this.chatService.getChat(chatID)
  //     .subscribe(chat => {
  //       this.chat = chat;
  //       this.chatForm.patchValue({
  //         title: chat.title
  //         // Ajoutez d'autres champs du formulaire si nécessaire
  //       });
  //     });
  // }

  // onSubmit(): void {
  //   if (this.chatForm.invalid || !this.chat || this.chat.chatID == null) {
  //     console.error('Invalid chat data');
  //     return;
  //   }
  
  //   const title = this.chatForm.value.title;
  //   const updatedChat: Chat = {
  //     chatID: this.chat.chatID,
  //     title: title,
  //     messages: this.chat.messages // Gardez les messages inchangés pour cet exemple
  //     // Modifiez d'autres champs du chat si nécessaire
  //   };
  
  //   this.chatService.updateChat(this.chat.chatID, updatedChat)
  //     .subscribe(
  //       (updatedChat) => {
  //         console.log('Chat updated successfully:', updatedChat);
  //         // Faire quelque chose après la mise à jour, par exemple rediriger l'utilisateur
  //       },
  //       (error) => {
  //         console.error('Error updating chat:', error);
  //       }
  //     );
  // }
  
 //}
