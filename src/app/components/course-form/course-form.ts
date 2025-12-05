import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course-service';
import { Icourse } from '../../interfaces/icourse';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'course-form',
  standalone: false,
  templateUrl: './course-form.html',
  styleUrl: './course-form.css',
})
export class CourseForm implements OnInit {
  courseForm: FormGroup;

  // We can use FormBuilder instance via Dependency injection to create a form group
  constructor(
    private formBuilderInstance: FormBuilder,
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {
    // Create a form group with form controls: email, password, subscribe
    this.courseForm = this.formBuilderInstance.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(3)]],
      level: ['', [Validators.required, Validators.min(100)]],
    });
  }

  ngOnInit(): void {
    // get the course id from current URL from route
    this.route.paramMap.subscribe((params) => {
      // check if id is present in the URL parameter
      let id = params.get('id');
      // check if id is truthy, then get course data
      if (id) {
        this.courseService.getCourse(parseInt(id)).subscribe(
          (course: Icourse) => {
            // update the course form with data
            this.courseForm.patchValue({
              id: course.id,
              name: course.name,
              level: course.level,
            });
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  get name() {
    return this.courseForm.get('email');
  }

  get level() {
    return this.courseForm.get('level');
  }

  onSubmit() {
    this.courseService
      .addCourse(this.courseForm.value)
      .subscribe((result: Icourse) => {
        console.log('Course added: ', result);
        // reset the form
        this.courseForm.reset();
      });
  }
}
