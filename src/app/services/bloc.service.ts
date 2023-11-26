import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bloc } from '../model/bloc';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  blocrUrl: any = "http://localhost:8082";
  getAllBlocs(): Observable<any[]> {
    return this.http.get<any[]>(this.blocrUrl + "/blocs");
  }
  addBloc(bloc: Bloc): Observable<any> {
    return this.http.post<Bloc>(this.blocrUrl + "/addBloc", bloc, this.httpOptions);
  }
  getBlocById(idBloc: number): Observable<Bloc> {
    return this.http.get<Bloc>(this.blocrUrl + '/bloc/' + idBloc);
  }
  updateBloc(idBloc: number, bloc: Bloc): Observable<Bloc> {
    return this.http.put<Bloc>(this.blocrUrl + '/updateBloc/' + idBloc, bloc, this.httpOptions);
  }
  deleteBloc(bloc: Bloc): Observable<Bloc> {
    const url = this.blocrUrl + '/deleteBloc/' + bloc.idBloc;
    return this.http.delete<Bloc>(url);
  }

  affecterFoyerBloc(idFoyer: number, idBloc: number): Observable<string> {
    const url = `${this.blocrUrl}/affecterFoyerBloc/${idFoyer}/${idBloc}`;
    return this.http.put<string>(url, {});
  }

  desaffecterFoyerBloc(idBloc: number): Observable<Bloc> {
    const url = `${this.blocrUrl}/desaffecterFoyerBloc/${idBloc}`;
    return this.http.put<Bloc>(url, {});
  }
}
