import { Injectable } from '@angular/core';
import { Icourse } from '../interfaces/icourse';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  API_URL = environment.api_url;
  // private _courses: Icourse[] = [
  //   { id: 1, name: 'Math', level: 101 },
  //   { id: 2, name: 'Science', level: 101 },
  //   { id: 3, name: 'Biology', level: 100 },
  // ];

  // We can use an instance of HttpClient object to make API calls for data
  // This module does need to be imported via provideHttpClient
  constructor(private httpClientInstance: HttpClient) {}

  getCourses(page: number, limit: number): Observable<Icourse[]> {
    // get page and limit from Http Parameters using HttpParams object
    const params = new HttpParams().set('page', page).set('limit', limit);
    // Typically making an API call for all courses, but we will use in memory array for now.
    // We can use < > to specify the type of data we expect from the API call.
    return this.httpClientInstance.get<Icourse[]>(this.API_URL + '/courses', {
      params: params,
    });
  }

  getCourse(id: number): Observable<Icourse> {
    return this.httpClientInstance.get<Icourse>(
      this.API_URL + '/courses/' + id
    );
  }

  addCourse(course: Icourse | FormData): Observable<Icourse> {
    return this.httpClientInstance.post<Icourse>(
      this.API_URL + '/courses',
      course
    );
  }

  updateCourse(id: number, course: Icourse | FormData): Observable<Icourse> {
    return this.httpClientInstance.patch<Icourse>(
      this.API_URL + '/courses/' + id,
      course
    );
  }

  deleteCourse(id: number): Observable<Icourse> {
    return this.httpClientInstance.delete<Icourse>(
      this.API_URL + '/courses/' + id
    );
  }
}
