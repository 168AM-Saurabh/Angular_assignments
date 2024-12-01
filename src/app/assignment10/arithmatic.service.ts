import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {
    constructor() { }
    
    public add(val1 : number, val2 : number){
        return (val1+val2);    
    }
    
    public sub(val1 : number, val2 : number){
        return (val1-val2);
    }
    
}
