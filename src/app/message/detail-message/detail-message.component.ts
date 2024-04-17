import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-detail-message',
  templateUrl: './detail-message.component.html',
  styleUrls: ['./detail-message.component.scss']
})
export class DetailMessageComponent implements OnInit{
  message!:any;
  constructor(private route: ActivatedRoute, private messageService: MessageService) {}
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('messageID');
      if (idParam !== null) {
        const messageID = +idParam; 
        this.messageService.getMessage(messageID).subscribe(message=> {
          this.message = message; 
        });
      } else {
       
      }
    });
  }
}
