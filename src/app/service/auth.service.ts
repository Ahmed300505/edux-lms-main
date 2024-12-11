import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${ApiURL}auth`;
  private tokenKey = 'authToken';
  private currentUserKey = 'currentUser';
  private currentUserSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem(this.tokenKey);
    const user = localStorage.getItem(this.currentUserKey);
    if (token && user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }

  /**
   * Fetch userId and username from local storage
   */
  getUserId(): { userId: number | null, username: string | null } {
    const token = localStorage.getItem(this.tokenKey);
    const user = localStorage.getItem(this.currentUserKey);
    
    if (!token || !user) return { userId: null, username: null };

    try {
      const parsedUser = JSON.parse(user);
      console.log("Parsed user:", parsedUser);

      const userId = parsedUser.id || null;
      const username = parsedUser.username || null;

      return {
        userId: userId ? Number(userId) : null,
        username: username ? String(username) : null,
      };
    } catch (error) {
      console.error("Error parsing user data:", error);
      return { userId: null, username: null };
    }
  }

  /**
   * User login
   */
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem(this.tokenKey, response.token);
        localStorage.setItem(this.currentUserKey, JSON.stringify(response.user));
        this.currentUserSubject.next(response.user);
      })
    );
  }

  /**
   * Register a new user
   */
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  /**
   * Fetch user information from the server
   */
  fetchUserInfo(): void {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this.http.get(`${this.apiUrl}/user-info`, { headers }).subscribe(
        (user: any) => {
          this.currentUserSubject.next(user);
          localStorage.setItem(this.currentUserKey, JSON.stringify(user));
        },
        error => {
          console.error("Failed to fetch user info:", error);
          this.logout();
        }
      );
    }
  }

  /**
   * Get the current user as an observable
   */
  getCurrentUser(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }

  /**
   * Check if the user is logged in
   */
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  /**
   * Log out the user
   */
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.currentUserKey);
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  /**
   * Redirect based on user role
   */
  redirectBasedOnRole(roleId: number): void {
    if (roleId === 1) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/user']);
    }
  }
}
