import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string 
  {
      let temp: string = "";
      temp = value.split('').reverse().join('');    //logic for reverse
      return temp;
  }

}
