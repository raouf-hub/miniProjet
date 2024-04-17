import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat } from 'src/app/model/Chat';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-detail-chat',
  templateUrl: './detail-chat.component.html',
  styleUrls: ['./detail-chat.component.scss']
})
export class DetailChatComponent  implements OnInit{
  chat!:any;
  constructor(private route: ActivatedRoute, private chatService: ChatService) {}
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('chatID');
      if (idParam !== null) {
        const chatID = +idParam; 
        this.chatService.getChat(chatID).subscribe(chat=> {
          this.chat = chat; 
        });
      } else {
       
      }
    });
  }
}
