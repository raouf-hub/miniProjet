import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/model/Message';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  //styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService ,  private router: Router,
    private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.getMessagess();
  }

  getMessagess(): void {
    this.messageService.getAllMessages()
      .subscribe(messages => this.messages = messages);
  }
  // details(chatID : number){
  //  // this.router.navigate(['/detailChat'], chatID);
  // }
  delete(message: Message) {
    this.messageService.deleteMessage(message).subscribe(() => {
      this.messages = this.messages.filter((f: Message) => f.messageID !== message.messageID);
      this.openSnackBar('Message deleted successfully', 'close');
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  update(messageID: any) {
    this.router.navigate(['/updateMessage', messageID]);
  }

  details(messageID: any) {
    this.router.navigate(['/detailMessage', messageID]);
  }
}