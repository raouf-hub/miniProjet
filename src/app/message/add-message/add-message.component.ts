// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Chat } from 'src/app/model/Chat';
// import { Message } from 'src/app/model/Message';
// import { User } from 'src/app/model/User';
// import { ChatService } from 'src/app/services/chat.service';
// import { MessageService } from 'src/app/services/message.service';

// @Component({
//   selector: 'app-add-message',
//   templateUrl: './add-message.component.html',
//   styleUrls: ['./add-message.component.scss']
// })
// export class AddMessageComponent implements OnInit {
//     messageForm: FormGroup;
//     selectedChatId!: number; // Variable pour stocker l'ID du chat sélectionné
//     chats: Chat[] = []; // Propriété pour stocker la liste des chats

//     constructor(private formBuilder: FormBuilder,
//                 private messageService: MessageService,
//                 private chatService: ChatService, // Injectez le service de chat
//                 private router: Router) {
//       this.messageForm = this.formBuilder.group({
//         chatID: ['', Validators.required], // Ajoutez un champ pour l'ID du chat
//         content: ['', Validators.required],
//         // Autres champs du formulaire
//       });
//     }

//     ngOnInit(): void {
//       // Chargez la liste des chats au démarrage du composant
//       this.loadChats();
//     }

//     loadChats(): void {
//       // Appelez le service de chat pour charger la liste des chats
//       this.chatService.getAllChats().subscribe(
//         (chats: Chat[]) => {
//           this.chats = chats;
//         },
//         (error) => {
//           console.error('Error loading chats:', error);
//         }
//       );
//     }

//     onSubmit() {
//       if (this.messageForm.valid) {
//         const messageData: Message = {
//           chatID: this.messageForm.value.chat,
//           content: this.messageForm.value.content,
//           sentAt: this.messageForm.value.sentAt,
//         };

//         const chatId = this.messageForm.value.chat;

//         this.messageService.addMessage(chatId, messageData).subscribe(
//           () => {
//             this.router.navigate(['/list-message']);
//           },
//           error => {
//             console.error('Error adding message:', error);
//           }
//         );
//       } else {
//         console.log('Form data is invalid');
//       }
//     }

//     onChatSelect(chatId: number) {
//       this.selectedChatId = chatId; // Mettez à jour l'ID du chat sélectionné
//     }
// }import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chat } from 'src/app/model/Chat';
import { Message } from 'src/app/model/Message';
import { ChatService } from 'src/app/services/chat.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss'],
})
export class AddMessageComponent implements OnInit {
  messageForm: FormGroup;
  selectedChatId!: number;
  chats: Chat[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private chatService: ChatService,
    private router: Router
  ) {
    this.messageForm = this.formBuilder.group({
      chatID: ['', Validators.required],
      content: ['', Validators.required],
      sentAt: [''], // Initialisez le champ sentAt avec la date système
    });
  }

  ngOnInit(): void {
    this.loadChats();
    // Initialisez la date système lors du chargement du composant
    this.messageForm.patchValue({
      sentAt: new Date(),
    });
  }

  loadChats(): void {
    this.chatService.getAllChats().subscribe(
      (chats: Chat[]) => {
        this.chats = chats;
      },
      (error) => {
        console.error('Error loading chats:', error);
      }
    );
  }

  onSubmit() {
    if (this.messageForm.valid) {
      const chatId = this.messageForm.value.chatID;

      // Obtenir la date système
      const currentDate = new Date();

      const messageData: Message = {
        chatID: chatId,
        content: this.messageForm.value.content,
        sentAt: currentDate, // Utilisez la date système
      };

      this.messageService.addMessage(chatId, messageData).subscribe(
        () => {
          this.router.navigate(['/listMessage']);
        },
        (error) => {
          console.error('Error adding message:', error);
        }
      );
    } else {
      console.log('Form data is invalid');
    }
  }


  onChatSelect(chatId: number) {
    this.selectedChatId = chatId;
  }
}
