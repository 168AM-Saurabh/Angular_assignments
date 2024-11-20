import { Component } from '@angular/core';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-assignment7',
  standalone: true,
  imports: [FirstComponent,SecondComponent],
  templateUrl: './assignment7.component.html',
  styleUrl: './assignment7.component.css'
})
export class Assignment7Component {
	public Info : string = "Marvellous Infosystems";
    
    public Fun(){
        return "Marvellous Infosystems"	//Q2)
    }
    
    public ClickFun(){
        this.Info = "Educating for better tomorrow";	//Q3)
    }
    
    public Info2 : string = "Marvellous Infosystems Q4)";
    
    public ClickUpper(){
        this.Info2 = this.Info2.toUpperCase();	//Q4)
    }
    
    public ClickLower(){
        this.Info2 = this.Info2.toLowerCase();	//Q4)
    }

}
