import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

transform(value1: number,value2: number): number {
        let total = 0;
        total = value1 * value2
        return total;
  }

}
