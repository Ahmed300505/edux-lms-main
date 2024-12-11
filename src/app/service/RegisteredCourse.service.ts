import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminGroup } from '../models/AdminGroup';
import { ApiURL } from '../constant';

export interface RegisteredCourse {
    id: number;
    userId: number;
    username: string;
    courseId: number;
    courseName:string;
    registrationDate: string;
  }
  

@Injectable({
  providedIn: 'root'
})
export class CourseRegistrationService {
  private apiUrl = `${ApiURL}RegisteredCourses`;

  constructor(private http: HttpClient) {}

  /**
   * Register a course for the logged-in user
   * @param courseId The ID of the course to register
   * @returns Observable with the registration response
   */
  registerCourse(courseId: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/${courseId}/register`, {}, { headers });
  }
  getRegisteredCourses(): Observable<RegisteredCourse[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<RegisteredCourse[]>(`${this.apiUrl}/my-courses`, { headers });
  }


  getCourseDetails(courseId: number): Observable<AdminGroup> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<AdminGroup>(`http://localhost:7097/api/AdminGroups/${courseId}`, { headers });
  }
}
