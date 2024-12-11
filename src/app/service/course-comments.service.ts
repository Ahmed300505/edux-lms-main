import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiURL } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class CourseCommentsService {

  private apiUrl = `${ApiURL}coursecomments`;

  constructor(private http: HttpClient) {}

  getComments(adminGroupId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${adminGroupId}`);
  }

  addComment(adminGroupId: number, commentText: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}/add?adminGroupId=${adminGroupId}`, JSON.stringify(commentText), { headers });
  }
  addReply(courseCommentId: number, replyText: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/addReply?courseCommentId=${courseCommentId}`, replyText, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  toggleLike(commentId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${commentId}/like`, {});
  }
}
