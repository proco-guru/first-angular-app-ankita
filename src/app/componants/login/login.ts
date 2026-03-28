import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
   constructor(private router: Router){}
   submittedData: any;

   userData:{ email: string; password: string }={
    email:"ankita.k.pawar19@gmail.com",
    password:"1234567890"//"Asd123"
   };

   // This will store submitted form data
 onSubmit(form: any) {
  if (!form.valid) return;

   const { email, password } = form.value;

    if (email === this.userData.email && password === this.userData.password) {
      this.router.navigate(['/LandingPage']);
      this.router.navigate(['/LandingPage']).then(success => {
    console.log("Navigation success:", success);
  });
      alert("Login Successful!");
    } else {
      alert("Invalid credentials");
    }
  }
}
