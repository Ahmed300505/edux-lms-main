import { Component } from '@angular/core';

import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { OnInit,ViewChild } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import Choices, {Options } from 'choices.js';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { FormGroup,FormsModule } from '@angular/forms';
import { FilePondOptions } from 'filepond';
import { FilePondModule } from 'ngx-filepond';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { Courses } from '../../../models/Courses';
import { CourseService } from '../../../course.service';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [SharedModule, FlatpickrModule, NgSelectModule, FilePondModule, FormsModule, AngularEditorModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})





export class AddCourseComponent implements OnInit {
  courses: Courses[] = [];
  newCourse: Courses = this.getEmptyCourse();
  isEditing: boolean = false;
  toasts: { message: string }[] = [];

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const CourseID = params['id'];
      if (CourseID) {
        this.isEditing = true;
        this.loadCourseById(CourseID);
      }
    });
  }

  loadCourseById(id: number): void {
    this.courseService.getCourse(id).subscribe((course) => {
      this.newCourse = course;
    });
  }

  getEmptyCourse(): Courses {
    return {
      CourseName: '',
      CourseCode: '',
      CreditHours: '',
    };
  }

  addOrEditCourse(): void {
    debugger;
    if (this.isEditing) {
      this.courseService.updateCourse(this.newCourse.CourseID!, this.newCourse).subscribe(
        () => {
          this.addToast('Course updated successfully!');
          this.resetForm();
        },
        (error: { message: string; }) => {
          this.addToast('Error updating course: ' + error.message);
        }
      );
    } else {
      this.courseService.createCourse(this.newCourse).subscribe(
        () => {
          this.addToast('Course added successfully!');
          this.resetForm();
        },
        (error) => {
          this.addToast('Error adding course: ' + error.message);
        }
      );
    }
  }

  resetForm(): void {
    this.newCourse = this.getEmptyCourse();
    this.isEditing = false;
  }

  addToast(message: string): void {
    this.toasts.push({ message });
    setTimeout(() => this.removeToast(this.toasts[0]), 3000);
  }

  removeToast(toast: { message: string }): void {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }
}


