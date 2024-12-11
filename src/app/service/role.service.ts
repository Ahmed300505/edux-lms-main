import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = `${ApiURL}role`;

  constructor(private http: HttpClient) {}

  addRole(roleName: string): Observable<any> {
    const roleData = { name: roleName };
    return this.http.post(`${this.apiUrl}/add`, roleData);
  }
  fetchRoles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/fetch`);
  }
}import { ApiURL } from '../constant';

