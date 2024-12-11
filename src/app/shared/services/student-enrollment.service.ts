import { Injectable } from '@angular/core';
import { ProgramUni } from './program.service';
import { Batch } from './batch.service';
import { StudyYear } from './study-year.service';
import { User } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Enrollment {
  studentID?: number; // Optional
  isActive?: boolean; // Optional, defaults to false
  programID: number; // Required
  program?: ProgramUni; // Optional
  batchID: number; // Required
  batch?: Batch; // Optional
  studyYearID: number; // Required
  studyYear?: StudyYear; // Optional
  userId: number; // Required
  user?: User; // Optional
  createdAt?: Date; // Optional, defaults to current time
}
@Injectable({
  providedIn: 'root'
})
export class StudentEnrollmentService {
  private baseUrl = 'http://localhost:7097/api/Enrollment';

  constructor(private http: HttpClient) {}
  getDropdownData(): Observable<any> {
    return this.http.get('http://localhost:7097/api/Enrollment/DropdownData');
  }

  saveStudentRegistration(data: Enrollment): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
  getActiveEnrollments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Active`);
  }

  activateStudent(studentID: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/Activate/${studentID}`, {});
  }
  getInactiveEnrollments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Inactive`);
  }
  getPendingEnrollments(): Observable<any> {
    return this.http.get('http://localhost:7097/api/Enrollment/PendingEnrollments');
  }
  getApprovedStudents(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:7097/api/Enrollment/ApprovedStudents');
  }
}
