import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private router: Router) {}
  submittedData: any;

  userData: { email: string; password: string } = {
    email: 'ankita.k.pawar19@gmail.com',
    password: '1234567890', //"Asd123"
  };

  ///------Form Sumbition
  // This will store submitted form data
  onSubmit(form: any) {
    if (!form.valid) return;

    const { email, password } = form.value;

    // STEP 1: Get existing users from localStorage
    let existingUsers = localStorage.getItem('userSigninData');

    // STEP 2: Convert to array (or initialize empty)
    let usersArray = existingUsers ? JSON.parse(existingUsers) : [];

    // STEP 3: Check if user already exists (by email) validatio

    const userExists = usersArray.find(
      (user: any) => user.email === email && user.password === password,
    );

    console.log('aksbf', email, password, userExists);
    if (userExists) {
      this.router.navigate(['/landing-page']);
      sessionStorage.setItem('UserName', JSON.stringify(userExists));

      alert('Login Successful!');
    } else {
      alert('Invalid credentials');
    }
  } ///------Form Sumbition
}
