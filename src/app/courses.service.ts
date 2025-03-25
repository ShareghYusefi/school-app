import { Injectable } from '@angular/core';

// Injectable decorator lets angular know that this class can be injected into other classes
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  // private accessor limits access to only within class for defined variable.
  private courses: string[] = ['Math 101', 'Science 101', 'Biology 100'];

  constructor() {}

  getCourses() {
    // Typically we make a call to API url for all courses, but here we return an array that exists in memory for now.
    return this.courses;
  }
}
