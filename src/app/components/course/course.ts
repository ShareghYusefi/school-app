import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Icourse } from '../../interfaces/icourse';

@Component({
  selector: 'course',
  standalone: false,
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course implements OnChanges {
  // ! lets typescript know that this variable will be initialized
  @Input() course!: Icourse;

  // 2. ngOnChanges runs when @Input property changes from undefined to a value
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course ngOnChanges', changes);
  }
}
