import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomeComponent } from './home/home.component';
import { DoctorsignupComponent } from './doctorsignup/doctorsignup.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { AlldoctorsComponent } from './alldoctors/alldoctors.component';
import { NewappointmentComponent } from './newappointment/newappointment.component';

const routes: Routes = [
{
  path:'',component:HomeComponent
},
{
  path:'appointment',component:NewappointmentComponent
},
{
  path:'signup',component:DoctorsignupComponent
},
{
  path:'doctorlogin',component:DoctorloginComponent
},
{
  path:'alldoctors',component:AlldoctorsComponent
},
{
  path:'allappointments',component:AppointmentComponent
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
