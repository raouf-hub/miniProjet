// import { Component } from '@angular/core';
// import { Message } from 'src/app/model/Message';
// import { MessageService } from 'src/app/services/message.service';

// @Component({
//   selector: 'app-show-list-message',
//   templateUrl: './show-list-message.component.html',
//   styleUrls: ['./show-list-message.component.scss']
// })
// export class ShowListMessageComponent {
//   messages: Message[] = [];

//   constructor(private messageService: MessageService) { }

//   ngOnInit(): void {
//     this.getAllMessages();
//   }

//   getAllMessages(): void {
//     this.messageService.getAllMessages().subscribe(
//       (messages: Message[]) => {
//         this.messages = messages;
//       },
//       (error) => {
//         console.error('Error loading messages:', error);
//       }
//     );
//   }
// }import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/model/Message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-show-list-message',
  templateUrl: './show-list-message.component.html',
  styleUrls: ['./show-list-message.component.scss'],
})
export class ShowListMessageComponent implements OnInit {
  messages: Message[] = [];
  filteredMessages: Message[] = [];
  searchTerm: string = '';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.getAllMessages();
  }

  getAllMessages(): void {
    this.messageService.getAllMessages().subscribe(
      (messages: Message[]) => {
        this.messages = messages;
        // Initialize filteredMessages with all messages
        this.filteredMessages = [...this.messages];
      },
      (error) => {
        console.error('Error loading messages:', error);
      }
    );
  }

  likeMessage(messageId: number): void {
    this.messageService.likeMessage(messageId).subscribe(
      (message: Message) => {
        this.updateMessageInArray(message);
      },
      (error) => {
        console.error('Error liking message:', error);
      }
    );
  }

  dislikeMessage(messageId: number): void {
    this.messageService.dislikeMessage(messageId).subscribe(
      (message: Message) => {
        this.updateMessageInArray(message);
      },
      (error) => {
        console.error('Error disliking message:', error);
      }
    );
  }

  updateMessageInArray(updatedMessage: Message): void {
    const index = this.messages.findIndex(
      (m) => m.messageID === updatedMessage.messageID
    );
    if (index !== -1) {
      this.messages[index] = updatedMessage;
      // Update filteredMessages as well
      this.filteredMessages = [...this.messages];
    }
  }

  // Function to filter messages based on search term
  filterMessages(): void {
    if (!this.searchTerm.trim()) {
      // If search term is empty, show all messages
      this.filteredMessages = [...this.messages];
      return;
    }
    // Filter messages based on search term
    this.filteredMessages = this.messages.filter((message) =>
      message.content.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
