import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientserviceService } from '../services/patientservice.service';

@Component({
  selector: 'app-newappointment',
  templateUrl: './newappointment.component.html',
  styleUrls: ['./newappointment.component.css']
})
export class NewappointmentComponent implements OnInit {
  formgroup!: FormGroup;

  constructor(private service: PatientserviceService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formgroup = this.fb.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
       gender: ['', [Validators.required]],
     doctorid : ['', [Validators.required]],
     date: ['', [Validators.required]],
      phoneno: ['', [Validators.required]],
      problem: ['', [Validators.required]]
    });
  }


  

  newdoctor(){
if(this.formgroup.valid){
  this.service.addpatients(this.formgroup.value).subscribe(data=>{
    alert('sucessfully inserted');
  })
}
else{
  alert('Not Inserted');
}
  }

}
