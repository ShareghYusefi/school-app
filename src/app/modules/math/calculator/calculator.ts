import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  standalone: false,
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  num1: number = 0;
  num2: number = 0;

  get total(): number {
    return this.num1 + this.num2;
  }
}
