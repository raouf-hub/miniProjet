import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meet } from '../model/Meet';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MeetService {
  private baseUrl = 'http://localhost:8089/meet'; // Assurez-vous de mettre la bonne URL de votre API

  constructor(private http: HttpClient ,  private toastr: ToastrService) {}

  addMeet(meet: Meet): Observable<any> {
    return this.http.post(`${this.baseUrl}/addMeet`, meet);
  }

  getAllMeets(): Observable<Meet[]> {
    return this.http.get<Meet[]>(`${this.baseUrl}/allMeet`);
  }

  getMeetbyId(id: number): Observable<Meet> {
    return this.http.get<Meet>(`${this.baseUrl}/Meet/${id}`);
  }

  updateMeet(meet: Meet): Observable<Meet> {
   
    return this.http.put<Meet>(`${this.baseUrl}/updateMeet`, meet);
    
  }

  updateMeetId(meet: Meet, id: number): Observable<Meet> {
    //this.toastr.success('Meet mis à jour avec succès', 'Succès');
    return this.http.put<Meet>(`${this.baseUrl}/updateMeet/${id}`, meet);
  }
  deleteMeet(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteMeet/${id}`, {
      responseType: 'text',
    });
  }
    // Méthode pour afficher une notification de succès
    showSuccessNotification(message: string): void {
      this.toastr.success(message, 'Succès');
    }
}
