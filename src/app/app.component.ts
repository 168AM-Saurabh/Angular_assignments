import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Assignment5Component } from './assignment5/assignment5.component';
import { Assignment6Component } from './assignment6/assignment6.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Assignment5Component,Assignment6Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_assignments';
}
