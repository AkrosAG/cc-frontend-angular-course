import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashes',
})
export class DashesPipe implements PipeTransform {

  transform(value: string, index: number): unknown {
    if (index %2 === 1) {
      return value;
    }
    return value.replaceAll(' ', '-');
  }

}
