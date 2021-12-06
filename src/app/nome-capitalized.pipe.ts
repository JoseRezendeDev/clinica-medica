import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomeCapitalized'
})
export class NomeCapitalizedPipe implements PipeTransform {

  capitalizeFirst(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }

  transform(value: string, ...args: unknown[]): unknown {
    let newValue = '';
    
    if (value) {
      value = value.trim();
      let splitted = value.split(' ');
      
      if (splitted) {
        for (let i=0; i<splitted.length; i++) {
          newValue = newValue + this.capitalizeFirst(splitted[i]) + ' ';
        }

        newValue = newValue.trim();
      }
    }

    
    return newValue;
  }
}
