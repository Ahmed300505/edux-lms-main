import { Component, OnInit } from '@angular/core';
import { Courses } from '../../../models/Courses';
import { CourseService } from '../../../course.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { FilterPipe } from '../../../../filter.pipe';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [SharedModule,RouterModule,FilterPipe,CommonModule,TableModule,FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent  implements OnInit {
  courses: Courses[] = [];
  globalFilterValue: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    debugger;
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe(
      (data) => {
        console.log('API Response:', data); // Debugging log
        this.courses = data; // Assign data to students array
      },
      (error) => {
        console.error('Error fetching students:', error);
      }
    );
  }
  

  confirmDelete(course: Courses): void {
    const confirmed = confirm(`Are you sure you want to delete ${course.CourseName} ${course.CourseCode}?`);
    if (confirmed) {
      this.courseService.deleteCourse(course.CourseID!).subscribe(() => {
        this.loadCourses();
      });
    }
  }
  // Add this method to your component.ts file

}

