import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private _courses: string[] = ['Math 101', 'Science 101', 'Biology 100'];

  getCourses() {
    // Typically making an API call for all courses, but we will use in memory array for now.
    return this._courses;
  }
}
