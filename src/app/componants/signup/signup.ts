import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  onSubmit(form: any) {
    //  const { text,email, password,confirmPassword } = form.value;
    const userSettings = form.value;

    //creating object type by retriving data from Form , will use fr the comparisn with existing data
    if (form.valid && form.value.password === form.value.confirmPassword) {
      const newUser = {
        name: form.value.name,
        email: form.value.email,
        password: form.value.password,
      };

      // STEP 1: Get existing users from localStorage
      let existingUsers = localStorage.getItem('userSigninData');

      // STEP 2: Convert to array (or initialize empty)
      let usersArray = existingUsers ? JSON.parse(existingUsers) : [];

      // STEP 3: Check if user already exists (by email)
      const userExists = usersArray.some((user: any) => user.email === newUser.email);

      if (userExists) {
        alert('User already exists with this email ❌');
        return;
      }

      // STEP 4: Append new user
      usersArray.push(newUser);

      // STEP 5: Save back to localStorage
      localStorage.setItem('userSigninData', JSON.stringify(usersArray));

      alert('User registered successfully ✅');

      form.reset();
    } else {
      alert('Passwords do not match ❌');
    }
  }
}
