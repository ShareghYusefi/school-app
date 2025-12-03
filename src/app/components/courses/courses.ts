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

  alertMessage(message: any) {
    this.message = message;
  }

  // 2. ngOnChanges runs when @Input property changes from undefined to a value
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Courses ngOnChanges');
  }

  // 3. ngOnInit runs only once after ngOnChanges: used to initialize component properties
  ngOnInit(): void {
    // create instance of service class
    // let courseService = new CourseService();
    this.courses = this.courseService.getCourses();
    console.log('Courses ngOnInit');
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
