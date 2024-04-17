import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../model/Chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private baseUrl = 'http://localhost:8089/chat';

  constructor(private http: HttpClient) { }

  getAllChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>(`${this.baseUrl}`);
  }

  getChat(chatID: number): Observable<Chat> {
    return this.http.get<Chat>(`http://localhost:8089/chat/${chatID}`);
  }

  addChat(chat: Chat): Observable<Chat> {
    return this.http.post<Chat>(`${this.baseUrl}/addChat`, chat);
  }

  updateChat(chatID: number, chat: Chat): Observable<Chat> {
    return this.http.put<Chat>(`${this.baseUrl}/${chatID}`, chat);
  }
  
  deleteChat(chat: Chat): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${chat.chatID}`);
  }
}
