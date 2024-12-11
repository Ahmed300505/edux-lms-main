import { Component, OnInit } from '@angular/core';
import { CourseRegistrationService, RegisteredCourse } from '../../../service/RegisteredCourse.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-registered-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-registered-courses.component.html',
  styleUrl: './my-registered-courses.component.scss'
})
export class MyRegisteredCoursesComponent implements OnInit {
  registeredCourses: RegisteredCourse[] = [];
  loadingComplete: boolean = false;
courseImages = [
    '../../../assets/Philippine Board of Nursing (1) (1)/1.jpg',
    '../../../assets/Philippine Board of Nursing (1) (1)/2.jpg',
    '../../../assets/Philippine Board of Nursing (1) (1)/3.jpg',
    '../../../assets/Philippine Board of Nursing (1) (1)/4.jpg',
    '../../../assets/Philippine Board of Nursing (1) (1)/5.jpg',
    '../../../assets/Philippine Board of Nursing (1) (1)/6.jpg',
    '../../../assets/Philippine Board of Nursing (1) (1)/7.jpg'
  ];
  constructor(private courseService: CourseRegistrationService) {}

  ngOnInit(): void {
    this.courseService.getRegisteredCourses().subscribe(
      (courses) => {
        this.registeredCourses = courses;
        this.loadingComplete = true;
        console.log('Registered Courses:', this.registeredCourses);
      },
      (error) => {
        this.loadingComplete = false;
        console.error('Error fetching registered courses:', error);
      }
    );
  }
}

