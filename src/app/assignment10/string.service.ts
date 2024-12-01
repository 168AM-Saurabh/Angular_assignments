import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {
    constructor() { }
    
    public countCapital(val1: string){
        let upCount : number = 0;
        for (let i=0; i<val1.length; i++){
            if (val1[i] >='A' && val1[i] <='Z'){
                upCount++;
            }
        }
        return upCount;
    }
}
