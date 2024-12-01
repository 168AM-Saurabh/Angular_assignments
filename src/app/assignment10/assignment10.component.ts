import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { NewChildComponent } from './new-child/new-child.component';


@Component({
  selector: 'app-assignment10',
  standalone: true,
  imports: [RouterOutlet,DemoComponent,Child1Component,Child2Component,NewChildComponent],
  templateUrl: './assignment10.component.html',
  styleUrl: './assignment10.component.css'
})
export class Assignment10Component {

}
