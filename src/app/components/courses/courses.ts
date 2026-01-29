import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CourseService } from '../../services/course-service';
import { Icourse } from '../../interfaces/icourse';

@Component({
  selector: 'courses',
  standalone: false,
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses implements OnChanges, OnInit, DoCheck, OnDestroy {
  title: string = 'List of Courses';
  courses: Icourse[] = [];
  booleanVariable: boolean = true;
  currentPage = 1;
  totalPages = 0;
  limit = 3;
  // courseService: CourseService;

  // Lifecycle hooks
  // 1. contructor function runs first when a component is created.
  // Dependency Injection
  // When this component is created, angular will find and inject an instance of the course service class here, and assign it to a variable.
  // We can use Parameter Property Declaration (shorthand to Parameter properties)
  constructor(private courseService: CourseService) {
    // this.courseService = courseService
    console.log('Courses constructor');
  }

  message: any;

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id).subscribe((result) => {
      // find course in courses array
      let course = this.courses.find((c) => c.id === result.id);

      // if course is undefined, return early
      if (!course) return;

      // remove the course from courses
      this.courses.splice(this.courses.indexOf(course), 1);
    });
  }

  // 2. ngOnChanges runs when @Input property changes from undefined to a value
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Courses ngOnChanges');
  }

  // 3. ngOnInit runs only once after ngOnChanges: used to initialize component properties
  ngOnInit(): void {
    // create instance of service class
    // let courseService = new CourseService();
    // Since the getCourses method returns an Observable object, we need to use the subscribe method to hand the return data
    this.loadCourses();
    console.log('Courses ngOnInit');
  }

  loadCourses(
    page: number = this.currentPage,
    limit: number = this.limit
  ): void {
    this.courseService.getCourses(page, limit).subscribe((results: any) => {
      this.courses = results.data;
      this.currentPage = results.page;
      this.totalPages = results.totalPages;
    });
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;    
    this.loadCourses(page);
  }

  // 4. ngDoCheck runs after ngOnInit: used to detect and act upon changes that Angular does NOT detect on its own.
  ngDoCheck(): void {
    console.log('Courses ngDoCheck');
  }

  // 5. ngOnDestroy runs when we navigate away from a component.
  ngOnDestroy(): void {
    console.log('Courses ngOnDestroy');
  }
}
