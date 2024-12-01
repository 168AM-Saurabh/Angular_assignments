import { Component } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
    public no1 : number = 62;
    public no2 : number = 31;
    public data1 : number;
    public data2 : number;
    
    public constructor(private sobj : ArithmaticService)
    {
        this.data1 = sobj.add(this.no1,this.no2);
        this.data2 = sobj.sub(this.no1,this.no2);
    }
    
}
