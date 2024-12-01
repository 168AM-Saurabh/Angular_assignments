import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-new-child',
  standalone: true,
  imports: [],
  templateUrl: './new-child.component.html',
  styleUrl: './new-child.component.css'
})
export class NewChildComponent {
    public no1 : number = 62;
    public ans1 : string =  '';
    public data1 : string = "This is data for Third question";
    public ans2 : number = 0;
    
    public constructor(private sobj1 : NumberService,private sobj2 : StringService,)
    {
        this.ans1 = sobj1.chkPrime(this.no1);
        this.ans2 = sobj2.countCapital(this.data1)
    }
}
