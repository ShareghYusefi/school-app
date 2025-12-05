import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course-service';
import { Icourse } from '../../interfaces/icourse';

@Component({
  selector: 'course-form',
  standalone: false,
  templateUrl: './course-form.html',
  styleUrl: './course-form.css',
})
export class CourseForm {
  courseForm: FormGroup;

  // We can use FormBuilder instance via Dependency injection to create a form group
  constructor(
    private formBuilderInstance: FormBuilder,
    private courseService: CourseService
  ) {
    // Create a form group with form controls: email, password, subscribe
    this.courseForm = this.formBuilderInstance.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(3)]],
      level: ['', [Validators.required, Validators.min(100)]],
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
