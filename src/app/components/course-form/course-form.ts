import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course-service';
import { Icourse } from '../../interfaces/icourse';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'course-form',
  standalone: false,
  templateUrl: './course-form.html',
  styleUrl: './course-form.css',
})
export class CourseForm implements OnInit {
  courseForm: FormGroup;
  // Track existing cover image separately
  existingCover: string | null = null;
  // Track if user selected a new file
  newFileSelected = false;

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
      cover: [null], // Keep this as null only
    });
  }

  onFileChange(event: any) {
    // select first file in input elements files array
    const file = event.target.files[0];
    if (file) {
      this.courseForm.patchValue({
        cover: file,
      });
      this.newFileSelected = true;
    }
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
              // Don't set cover control - instead store in component property
            });
            // Store existing cover image URL separately
            this.existingCover = course.cover?.length
              ? environment.api_url + course.cover[0]?.fileUrl
              : null;
            // Reset file selection flag
            this.newFileSelected = false;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  get name() {
    return this.courseForm.get('name');
  }

  get level() {
    return this.courseForm.get('level');
  }

  get cover() {
    return this.courseForm.get('cover');
  }

  // Remove existing cover
  removeCover() {
    this.existingCover = null;
  }

  onSubmit() {
    if (this.courseForm.invalid) return;

    // check if we ahve an id in URL
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.updateCourse(parseInt(id));
    } else {
      this.postCourse();
    }
  }

  updateCourse(id: number) {
    const formData = new FormData();
    formData.append('id', this.courseForm.get('id')?.value);
    formData.append('name', this.courseForm.get('name')?.value);
    formData.append('level', this.courseForm.get('level')?.value);

    // Only append cover if user selected a new file
    if (this.newFileSelected) {
      formData.append('cover', this.courseForm.get('cover')?.value);
    }

    this.courseService
      .updateCourse(id, formData)
      .subscribe((result: Icourse) => {
        console.log('Course updated: ', result);
        this.newFileSelected = false;
      });
  }

  postCourse() {
    // create formData object to send file data
    const formData = new FormData();
    formData.append('name', this.courseForm.get('name')?.value);
    formData.append('level', this.courseForm.get('level')?.value);
    formData.append('cover', this.courseForm.get('cover')?.value);

    this.courseService.addCourse(formData).subscribe((result: Icourse) => {
      console.log('Course added: ', result);
      // reset the form
      this.courseForm.reset();
      this.existingCover = null;
      this.newFileSelected = false;
    });
  }
}
