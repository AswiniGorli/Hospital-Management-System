import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientserviceService } from '../services/patientservice.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  details: Patient[] = [];

  constructor(private service: PatientserviceService) {}

  ngOnInit(): void {
    this.fetchData();
   
  }

  fetchData(): void {
    this.service.getall().subscribe(data => this.details = data);
  }

  
  deletepatient(id: number): void {
    this.service.deletepatient(id).subscribe(() => this.fetchData());
  }


}
