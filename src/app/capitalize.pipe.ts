import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: false,
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    // Manipulate the input value
    if (!value) {
      return value;
    }
    // Capitalize the first letter and concatenate it with the rest of the string
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
