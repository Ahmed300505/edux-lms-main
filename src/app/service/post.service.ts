import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiURL } from '../constant';

interface Post {
    id?: number;
    title: string;
    content: string;
    userId: number;
    comments?: Comment[];
    username: string;  // Add username here

}

interface Comment {
    id?: number;
    text: string;
    userId: number;
    postId: number;
    replies?: Reply[];
    username: string;  // Add username here

}

interface Reply {
    id?: number;
    text: string;
    userId: number;
    commentId: number;
    username: string;  // Add username here

}

@Injectable({
    providedIn: 'root'
})
export class PostService {
  private apiUrl = `${ApiURL}post`;

    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.apiUrl);
    }

    getPost(id: number): Observable<Post> {
        return this.http.get<Post>(`${this.apiUrl}/${id}`);
    }

    createPost(post: Post): Observable<Post> {
        return this.http.post<Post>(this.apiUrl, post);
    }

    updatePost(post: Post): Observable<void> {
        return this.http.put<void>(`${this.apiUrl}/${post.id}`, post);
    }

    deletePost(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    addComment(postId: number, comment: Comment): Observable<Comment> {
        return this.http.post<Comment>(`${this.apiUrl}/${postId}/comments`, comment);
    }

    addReply(postId: number, commentId: number, reply: Reply): Observable<Reply> {
        return this.http.post<Reply>(`${this.apiUrl}/${postId}/comments/${commentId}/replies`, reply);
    }

    addLike(like: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/like`, like);
  }
  toggleLike(type: string, itemId: number, userId: number): Observable<{ liked: boolean; likeCount: number }> {
    return this.http.post<{ liked: boolean; likeCount: number }>(
      `${this.apiUrl}/like/toggle`,
      { type, itemId, userId }
    );
  }

  likePost(postId: number, userId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${postId}/like`, { userId });
}

likeComment(commentId: number, userId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/comments/${commentId}/like`, { userId });
}

likeReply(replyId: number, userId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/replies/${replyId}/like`, { userId });
}

}
