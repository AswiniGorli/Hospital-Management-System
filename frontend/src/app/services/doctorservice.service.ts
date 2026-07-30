import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctors } from '../models/doctors';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {
private baseurl1 = "http://localhost:8082/api/doctor/getall";
  private baseurl2 = 'http://localhost:8082/api/doctor/insert';
  private baseurl3 = 'http://localhost:8082/api/doctor/login';
   private baseurl4 = 'http://localhost:8082/api/doctor/deletedoctor';
 constructor(private http: HttpClient) { }

  getall(): Observable<any[]> {

    return this.http.get<any[]>(`${this.baseurl1}`);
  }
  adddoctor(doc: Doctors): Observable<any> {
    return this.http.post<any>(this.baseurl2, doc);

  }

loginUser(credentials: { email: string, password: string }): Observable<any> {
  return this.http.post<any>(this.baseurl3, credentials);
}

  deletedoctor(id: number): Observable<any> {
  return this.http.get(`${this.baseurl4}/${id}`, { responseType: 'text' as 'json' });
}
}
