import { Component,Input,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component 
{
    @Output() public MyEvent2 = new EventEmitter();
    
    public childToParent()
    {
        this.MyEvent2.emit("Hello from Child");
    }
    
    @Input() public parentData : any;
}
