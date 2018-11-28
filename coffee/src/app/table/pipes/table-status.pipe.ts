import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableStatus'
})
export class TableStatusPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    let result = '';
    switch (value) {
      case 1: {
        result = 'Open';
        break;
      }
      case 2: {
        result = 'Serving';
        break;
      }
      case 3: {
        result = 'Served';
        break;
      }
      default : result = 'None';
    }
    return result;
  }

}
