import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calculator } from './calculator/calculator';
import { FormsModule } from '@angular/forms';

@NgModule({
  // owned by thsi module
  declarations: [Calculator],
  imports: [CommonModule, FormsModule],
  exports: [Calculator], // expose to other modules
})
export class MathModule {}
