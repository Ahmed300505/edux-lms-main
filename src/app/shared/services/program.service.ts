import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface ProgramUni {
  programId?: number;
  programName: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private apiUrl = 'http://localhost:7097/api/Programs';

  constructor(private http: HttpClient) {}


  getPrograms(): Observable<ProgramUni[]> {
    return this.http.get<ProgramUni[]>(this.apiUrl);
  }

  getProgram(id: number): Observable<ProgramUni> {
    return this.http.get<ProgramUni>(`${this.apiUrl}/${id}`);
  }

  createProgram(program: ProgramUni): Observable<ProgramUni> {
    return this.http.post<ProgramUni>(this.apiUrl, program);
  }

  updateProgram(id: number, program: ProgramUni): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, program);
  }

  deleteProgram(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
