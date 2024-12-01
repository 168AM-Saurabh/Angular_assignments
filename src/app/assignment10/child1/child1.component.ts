import { Component } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
    public no1 : number = 31;
    public ans : string =  '';
    
    public constructor(private sobj : NumberService)
    {
        this.ans = sobj.chkPrime(this.no1);
    }
    
}
