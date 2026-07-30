import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  private baseurl1 = 'http://localhost:8082/api/patients/getall';
    private baseurl2 = 'http://localhost:8082/api/patients/insert';
     private baseurl3 = 'http://localhost:8082/api/patients/deletepatients';
   constructor(private http: HttpClient) { }
  
    getall(): Observable<any[]> {
  
      return this.http.get<any[]>(`${this.baseurl1}`);
    }
    addpatients(p: Patient): Observable<any> {
      return this.http.post<any>(this.baseurl2, p);
  
    }
  
    deletepatient(id: number): Observable<any> {
    return this.http.get(`${this.baseurl3}/${id}`, { responseType: 'text' as 'json' });
  }
  
}
