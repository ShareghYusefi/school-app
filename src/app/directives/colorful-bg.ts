import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ColorfulBg]',
  standalone: false,
})
export class ColorfulBg {
  // use dependency injection to get the element reference
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
