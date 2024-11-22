import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

transform(value: number, Param:string): any {
        
        if(Param == "Even")
        {
            if(value %2 == 0){
                return "It is Even number";
            }
        }
    
        if(Param == "Odd")
        {
            if(value %2 != 0){
                return "It is Odd number";
            }
        }
    
        if(Param == "Prime")
        {
            let flag = true;
            for (let i=2; i <= value/2; i++){
                if(value % i == 0){
                    flag = false;
                    break;
                }
            }
            if(flag){
                return "It is Prime number";
            }
    
        }
    
        if(Param == "Perfect")
        {
            let total = 0;
            for (let i=1; i < value; i++)
            {
                if(value % i == 0){
                    total += i;
                }
            }
            if(total == value)
            {
                return "It is Perfect number";
            }
    
        }    
    
  }

}
