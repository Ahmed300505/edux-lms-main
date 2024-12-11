import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Student } from './models/StudentEnrollment';
import { Courses } from './models/Courses';
import { ApiURL } from './constant';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = `${ApiURL}api/courses`;


  constructor(private http: HttpClient) {}

  getCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>(this.apiUrl);
  }

  getCourse(id: number): Observable<Courses> {
    return this.http.get<Courses>(`${this.apiUrl}/${id}`);
  }

  createCourse(course: Courses): Observable<Courses> {
    return this.http.post<Courses>(this.apiUrl, course);
  }

  updateCourse(id: number, course: Courses): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = error.error || `Server-side error: ${error.status}`;
    }
    return throwError(errorMessage);
  }
}
