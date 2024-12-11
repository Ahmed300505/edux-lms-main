
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component,OnInit,ViewChild } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import Choices, {Options } from 'choices.js';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { FormGroup,FormsModule } from '@angular/forms';
import { FilePondOptions } from 'filepond';
import { FilePondModule } from 'ngx-filepond';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { StudentService } from '../../../student.service';
import { Student } from '../../../models/StudentEnrollment';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [SharedModule, FlatpickrModule, NgSelectModule, FilePondModule, FormsModule, AngularEditorModule],
  templateUrl: './add-student.component.html',
  providers:[  FlatpickrDefaults],
  styleUrl: './add-student.component.scss'
})

export class AddStudentComponent implements OnInit {
  students: Student[] = [];
  newStudent: Student = this.getEmptyStudent();
  isEditing: boolean = false;
  toasts: { message: string }[] = [];

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const studentID = params['id'];
      if (studentID) {
        this.isEditing = true;
        this.loadStudentById(studentID);
      }
    });
  }

  loadStudentById(id: number): void {
    this.studentService.getStudent(id).subscribe((student) => {
      this.newStudent = student;
    });
  }

  getEmptyStudent(): Student {
    return {
      studentNumber: '',
      firstName: '',
      middleName: '',
      lastName: '',
      dateOfBirth: '',
      emailAddress: '',
      mobileNumber: '',
      address: '',
      isActive: true,
    };
  }

  addOrEditStudent(): void {
    debugger;
    if (this.isEditing) {
      this.studentService.updateStudent(this.newStudent.studentID!, this.newStudent).subscribe(
        () => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Student updated successfully',
            showConfirmButton: false,
            timer: 2000,
          });
        },
        (error) => {
          this.addToast('Error updating student: ' + error.message);
        }
      );
    } else {
      this.studentService.createStudent(this.newStudent).subscribe(
        () => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Student added successfully',
            showConfirmButton: false,
            timer: 2000,
          });
        },
        (error) => {
          this.addToast('Error adding student: ' + error.message);
        }
      );
    }
  }

  resetForm(): void {
    this.newStudent = this.getEmptyStudent();
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

