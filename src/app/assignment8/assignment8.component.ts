import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-assignment8',
  standalone: true,
  imports: [ChildComponent,Child2Component,FormsModule],
  templateUrl: './assignment8.component.html',
  styleUrl: './assignment8.component.css'
})
export class Assignment8Component {
	public Message : any;
    public Message2 : any;
    public Message3 = "Hello from Parent";
    public appData : string = "";
    public dataLength : number = 0;
    textLength(e:any)
    {
        this.dataLength = e.target.value.length;    
    }
}
