import { Component } from '@angular/core';

@Component({
  selector: 'course',
  standalone: false,
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
  title: string = 'List of Courses';
  courses: string[] = ['Math 101', 'Science 101', 'Biology 100'];
}
