import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Login } from './componants/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,Login],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('myBloggieBlogs');
}
