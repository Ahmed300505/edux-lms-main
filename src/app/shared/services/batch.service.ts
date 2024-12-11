import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Batch {
  BatchId?: number;
  batchName: string;
  createdAt: Date;
}
@Injectable({
  providedIn: 'root'
})
export class BatchService {
  private apiUrl = 'http://localhost:7097/api/Batch';

  constructor(private http: HttpClient) {}


  getBatch(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.apiUrl);
  }

  getBatchs(id: number): Observable<Batch> {
    return this.http.get<Batch>(`${this.apiUrl}/${id}`);
  }

  createBatch(batch: Batch): Observable<Batch> {
    return this.http.post<Batch>(this.apiUrl, batch);
  }

  updateBatch(id: number, batch: Batch): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, batch);
  }

  deleteBatch(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
