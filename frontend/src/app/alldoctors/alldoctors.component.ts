import { Component, OnInit } from '@angular/core';
import { Doctors } from '../models/doctors';
import { DoctorserviceService } from '../services/doctorservice.service';

@Component({
  selector: 'app-alldoctors',
  templateUrl: './alldoctors.component.html',
  styleUrls: ['./alldoctors.component.css']
})
export class AlldoctorsComponent implements OnInit {

  details: Doctors[] = [];

  constructor(private service: DoctorserviceService) {}

  ngOnInit(): void {
    this.fetchData();
   
  }

  fetchData(): void {
    this.service.getall().subscribe(data => this.details = data);
  }

  
  deletedoctor(id: number): void {
    this.service.deletedoctor(id).subscribe(() => this.fetchData());
  }

  }

