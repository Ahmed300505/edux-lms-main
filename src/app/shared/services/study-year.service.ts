import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface StudyYear {
  StudyYearId?: number;
  studyYears: string;
  CreatedAt: Date;
}
@Injectable({
  providedIn: 'root'
})
export class StudyYearService {
  private apiUrl = 'http://localhost:7097/api/StudyYear';

  constructor(private http: HttpClient) {}


  getStudyYear(): Observable<StudyYear[]> {
    return this.http.get<StudyYear[]>(this.apiUrl);
  }

  getStudyYears(id: number): Observable<StudyYear> {
    return this.http.get<StudyYear>(`${this.apiUrl}/${id}`);
  }

  createStudyYear(studyYear: StudyYear): Observable<StudyYear> {
    return this.http.post<StudyYear>(this.apiUrl, studyYear);
  }

  updateStudyYear(id: number, studyYear: StudyYear): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, studyYear);
  }

  deleteStudyYear(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
