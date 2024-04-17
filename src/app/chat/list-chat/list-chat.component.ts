
import { Component } from '@angular/core';
import { Chat } from 'src/app/model/Chat';
import { ChatService } from 'src/app/services/chat.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-chat',
  templateUrl: './list-chat.component.html',
  styleUrls: ['./list-chat.component.scss']
})
export class ListChatComponent  {
  chats: Chat[] = [];

  constructor(private chatService: ChatService ,  private router: Router,
    private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.getChats();
  }

  getChats(): void {
    this.chatService.getAllChats()
      .subscribe(chats => this.chats = chats);
  }
  // details(chatID : number){
  //  // this.router.navigate(['/detailChat'], chatID);
  // }
  delete(chat: Chat) {
    this.chatService.deleteChat(chat).subscribe(() => {
      this.chats = this.chats.filter((f: Chat) => f.chatID !== chat.chatID);
      this.openSnackBar('chat deleted successfully', 'close');
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  update(chatID: any) {
    this.router.navigate(['/updateChat', chatID]);
  }

  details(chatID: any) {
    this.router.navigate(['/detailChat', chatID]);
  }
}