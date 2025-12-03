import { Component } from '@angular/core';
import { CourseService } from '../../services/course-service';
import { Icourse } from '../../interfaces/icourse';

@Component({
  selector: 'courses',
  standalone: false,
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  title: string = 'List of Courses';
  courses: Icourse[] = [];
  booleanVariable: boolean = true;

  // Dependency Injection
  // When this component is created, angular will find and inject an instance of the course service class here, and assign it to a variable.
  constructor(courseService: CourseService) {
    // create instance of service class
    // let courseService = new CourseService();
    this.courses = courseService.getCourses();
  }
}
