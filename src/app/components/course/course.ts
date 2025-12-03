import { Component, Input } from '@angular/core';
import { Icourse } from '../../interfaces/icourse';

@Component({
  selector: 'course',
  standalone: false,
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
  // ! lets typescript know that this variable will be initialized
  @Input() course!: Icourse;
}
