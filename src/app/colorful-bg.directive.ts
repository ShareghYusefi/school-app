import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorfulBg]',
  standalone: false,
})
export class ColorfulBgDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
