import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Chat } from 'src/app/model/Chat';
import { ChatService } from 'src/app/services/chat.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-chat',
  templateUrl: './add-chat.component.html',
  styleUrls: ['./add-chat.component.scss']
})
export class AddChatComponent {
  chatForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private chatService: ChatService , private router :Router , private _snackBar: MatSnackBar) { 
    
  this.chatForm = this.formBuilder.group(
    {
      title:['',Validators.required],
     
    });
  }

  onSubmit(){
    if (this.chatForm.valid){
      const chat = this.chatForm.value;
      this.chatService.addChat(chat).subscribe(()=>
      { this.router.navigate(['/listChat']);
      this.openSnackBar('chat added successfully', 'close')
    }
      )
    }
    else{
     
      this.openSnackBar('Error adding chat', 'close');
    }
   }
   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000, 
    });
  }
  

  // onSubmit(): void {
  //   if (this.chatForm.invalid) {
  //     return;
  //   }
    
  //   const title = this.chatForm.value.title;
  //   const newChat: Chat = { chatID: null, title: title, messages: [] };

  //   this.chatService.addChat(newChat).subscribe((response) => {
  //     console.log('New chat added:', response);
     
  //   }, (error) => {
  //     console.error('Error adding new chat:', error);
  //   });
  // }

}