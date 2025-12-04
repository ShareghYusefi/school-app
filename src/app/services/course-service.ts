import { Injectable } from '@angular/core';
import { Icourse } from '../interfaces/icourse';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private _courses: Icourse[] = [
    { id: 1, name: 'Math', level: 101 },
    { id: 2, name: 'Science', level: 101 },
    { id: 3, name: 'Biology', level: 100 },
  ];

  getCourses() {
    // Typically making an API call for all courses, but we will use in memory array for now.
    return this._courses;
  }
}
