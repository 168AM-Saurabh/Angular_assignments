import { Component,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
    public data : string = "";
    @Output() public MyEvent = new EventEmitter();
    
    public SendMessage()
    {
        this.MyEvent.emit(this.data);
    }
}
