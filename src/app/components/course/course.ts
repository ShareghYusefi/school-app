import { Component } from '@angular/core';
import { CourseService } from '../../services/course-service';

// Component decorator is used to define associated metadata
@Component({
  selector: 'course',
  standalone: false,
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
  title: string = 'List of Courses';
  courses: string[] = [];

  // Dependency Injection
  // When this component is created, angular will find and inject an instance of the course service class here, and assign it to a variable.
  constructor(courseService: CourseService) {
    // create instance of service class
    // let courseService = new CourseService();
    this.courses = courseService.getCourses();
  }
}
