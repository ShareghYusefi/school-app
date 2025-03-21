import { Component } from '@angular/core';

@Component({
  selector: 'course',
  standalone: false,
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  title: string = 'List of Courses';
  courses: string[] = ['Math 101', 'Science 101', 'Biology 100'];
}
