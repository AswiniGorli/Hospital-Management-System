import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorserviceService } from '../services/doctorservice.service';
import { Doctors } from '../models/doctors';
@Component({
  selector: 'app-doctorsignup',
  templateUrl: './doctorsignup.component.html',
  styleUrls: ['./doctorsignup.component.css']
})
export class DoctorsignupComponent implements OnInit {
  formgroup!: FormGroup;

  constructor(private service: DoctorserviceService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formgroup = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
       specialization: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required]],
      phnno: ['', [Validators.required]]
    });
  }


  newdoctor(){
if(this.formgroup.valid){
  this.service.adddoctor(this.formgroup.value).subscribe(data=>{
    alert('sucessfully inserted');
  })
}
else{
  alert('Not Inserted');
}
  }



}
