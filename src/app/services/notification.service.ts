import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new Subject<string>();
  notification$ = this.notificationSubject.asObservable();

  constructor() { }

  sendNotification(message: string): void {
    this.notificationSubject.next(message);
  }
}
