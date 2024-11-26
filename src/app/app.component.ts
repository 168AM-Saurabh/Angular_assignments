import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Assignment5Component } from './assignment5/assignment5.component';
import { Assignment6Component } from './assignment6/assignment6.component';
import { Assignment7Component } from './assignment7/assignment7.component';
import { Assignment8Component } from './assignment8/assignment8.component';
import { Assignment9Component } from './assignment9/assignment9.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  RouterOutlet,
  Assignment5Component,
  Assignment6Component,
  Assignment7Component,
  Assignment8Component,
  Assignment9Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_assignments';
}
