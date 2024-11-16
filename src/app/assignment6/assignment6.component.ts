import { Component } from '@angular/core';
import { NewCompComponent } from './new-comp/new-comp.component';

@Component({
  selector: 'app-assignment6',
  standalone: true,
  imports: [NewCompComponent],
  templateUrl: './assignment6.component.html',
  styleUrl: './assignment6.component.css'
  // template: `
  // <h1>Q3</h1>
  // <input type="text">
  // <h2 [class] = "'success'">Marvellous Infosystems</h2>
  // `,
  // styles: `
  // .success{color: blue;}
  // `
})
export class Assignment6Component {

}
