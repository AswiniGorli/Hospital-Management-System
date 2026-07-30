import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { DoctorsignupComponent } from './doctorsignup/doctorsignup.component';
import { AlldoctorsComponent } from './alldoctors/alldoctors.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewappointmentComponent } from './newappointment/newappointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AppointmentComponent,
    DoctorloginComponent,
    DoctorsignupComponent,
    AlldoctorsComponent,
    NewappointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   FormsModule,          
    ReactiveFormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
