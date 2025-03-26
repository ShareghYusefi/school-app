import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'course',
  standalone: false,
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  title: string = 'list of courses';
  date = new Date();
  courses: string[];
  booleanVariable = true;

  // Dependency Injection
  // when this component is created, angular injects an instance CoursesService into the constructor
  constructor(service: CoursesService) {
    // we can use the CoursesService instance to call getCourses() function for data
    this.courses = service.getCourses();
  }
}
