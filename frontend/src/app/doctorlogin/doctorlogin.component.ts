import { Component } from '@angular/core';
import { DoctorserviceService } from '../services/doctorservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private service: DoctorserviceService, private router: Router) {}
 

  login(): void {
  const credentials = { email: this.email, password: this.password };

  this.service.loginUser(credentials).subscribe({
    next: (res) => {
      console.log("Login successful", res);
      // Navigate to dashboard
      this.router.navigate(['/allappointments']);
    },
    error:String => {
      
      this.message = 'Invalid email or password.';
    }
  });
}

}
