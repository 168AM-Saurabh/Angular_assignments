import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
    constructor() { }
    
    public chkPrime(val1 : number){
        let flag = true;
        for (let i=2; i <= val1/2; i++){
            if(val1 % i == 0){
                flag = false;
                break;
            }
        }
        
        if(flag){
            return "It is Prime number";
        }else{
            return "It is not Prime number";
        }   
    }
}
