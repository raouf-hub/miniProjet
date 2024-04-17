import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../model/Message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private baseUrl = 'http://localhost:8089/messages';

  constructor(private http: HttpClient) {}

  getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.baseUrl}`);
  }

  getMessage(messageID: number): Observable<Message> {
    return this.http.get<Message>(`${this.baseUrl}/${messageID}`);
  }

  updateMessage(messageID: number, message: Message): Observable<Message> {
    return this.http.put<Message>(`${this.baseUrl}/${messageID}`, message);
  }

  deleteMessage(message: Message): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${message.messageID}`);
  }
  addMessage(chatId: number, message: Message): Observable<Message> {
    return this.http.post<Message>(`${this.baseUrl}/add/${chatId}`, message);
  }
  likeMessage(messageID: number): Observable<Message> {
    return this.http.post<Message>(`${this.baseUrl}/${messageID}/like`, {});
  }

  dislikeMessage(messageID: number): Observable<Message> {
    return this.http.post<Message>(`${this.baseUrl}/${messageID}/dislike`, {});
  }

}
