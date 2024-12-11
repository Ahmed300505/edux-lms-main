import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AdminGroup } from '../models/AdminGroup';
import { ApiURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class AdminGroupService {
    private baseUrl = `${ApiURL}AdminGroups`;

    constructor(private http: HttpClient) {}

    getAdminGroups(): Observable<AdminGroup[]> {
        return this.http.get<AdminGroup[]>(this.baseUrl); // Use AdminGroup[] to type the response
      }
    // addGroup(adminGroup: AdminGroup): Observable<any> {
    //     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //     return this.http.post<any>(`${this.baseUrl}/add`, adminGroup, { headers });
    //   }
    addGroup(adminGroupData: FormData): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/add`, adminGroupData);
    }
    
    
    updateAdminGroup(id: number, formData: FormData): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`, formData);
    }

    deleteAdminGroup(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
    getGroupById(id: number): Observable<AdminGroup> {
        return this.http.get<AdminGroup>(`${this.baseUrl}/${id}`);
    }
}