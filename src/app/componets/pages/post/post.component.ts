import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { PostService } from '../../../service/post.service';
import { AuthService } from '../../../service/auth.service';
import { CommonModule } from '@angular/common'; // Import this module
import { FormsModule } from '@angular/forms'; // Import FormsModule




interface Post {
    id?: number;
    title: string;
    content: string;
    username: string;
    userId: number;
    comments?: Comment[];
    visibleComments?: number; // New property to track visible comments
    isLiked?: boolean;
    likes?: Like[];
    createdAt?: string;
}

interface Comment {
    id?: number;
    text: string;
    userId: number;
    postId: number;
    replies?: Reply[];
    isLiked?: boolean;
    likes?: Like[];
    username: string;
    createdAt?: string;
}

interface Reply {
    id?: number;
    text: string;
    userId: number;
    commentId: number;
    username: string;
    isLiked?: boolean;
    likes?: Like[];
    createdAt?: string;
}

interface Like {
    id?: number;
    userId: number;
    postId?: number;
    commentId?: number;
    replyId?: number;
}

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
    posts: Post[] = [];
    newPostTitle: string = '';
    newPostContent: string = '';
    newCommentText: string = '';
    newReplyText: string = '';
    newComment = '';

    userId: number | null = null;
    username: string | null = null;
    isModalOpen: boolean = false;

    constructor(
        private postService: PostService,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        const userInfo = this.authService.getUserId();
        this.userId = userInfo.userId;
        this.username = userInfo.username;

        if (this.userId === null || this.username === null) {
            console.error("User ID or username could not be retrieved.");
            return;
        }

        this.loadPosts();
    }

    // Load posts from the backend
    loadPosts(): void {
        this.postService.getPosts().subscribe((posts) => {
            this.posts = posts.map(post => ({
                ...post,
                comments: post.comments || [], // Ensure comments is an array
                visibleComments: 5 // Initialize visibleComments for pagination
            }));
            console.log("Loaded posts:", this.posts);
        });
    }
    shouldShowMoreButton(post: Post): boolean {
        const comments = post.comments || []; // Default to an empty array if undefined
        return comments.length > (post.visibleComments || 0);
    } 
    createPost(): void {
        if (!this.newPostTitle || !this.newPostContent) return;

        const newPost: Post = {
            title: this.newPostTitle,
            content: this.newPostContent,
            userId: this.userId!,
            username: this.username!,
            comments: [], 
        visibleComments: 5 
        };

        this.postService.createPost(newPost).subscribe(() => {
            this.loadPosts();
            this.newPostTitle = '';
            this.newPostContent = '';
            this.closeModal();
        });
    }
    showMoreComments(post: Post): void {
        if (post.visibleComments !== undefined && post.comments?.length) {
            post.visibleComments += 5; // Load 5 more comments
        }
    }
    openModal(): void {
        this.isModalOpen = true;
    }

    closeModal(): void {
        this.isModalOpen = false;
    }

    addComment(postId: number): void {
        if (!this.newCommentText) return;

        const newComment: Comment = {
            text: this.newCommentText,
            userId: this.userId!,
            username: this.username!,
            postId
        };

        this.postService.addComment(postId, newComment).subscribe(() => {
            this.loadPosts();
            this.newCommentText = '';
        });
    }

    addReply(postId: number, commentId: number): void {
        if (!this.newReplyText) return;

        const newReply: Reply = {
            text: this.newReplyText,
            userId: this.userId!,
            commentId,
            username: this.username!
        };

        this.postService.addReply(postId, commentId, newReply).subscribe(() => {
            this.loadPosts();
            this.newReplyText = '';
        });
    }

    likePost(postId: number): void {
        const like = { userId: this.userId!, postId };
        this.postService.addLike(like).subscribe(() => this.loadPosts());
    }

    likeComment(commentId: number): void {
        const like = { userId: this.userId!, commentId };
        this.postService.addLike(like).subscribe(() => this.loadPosts());
    }

    likeReply(replyId: number): void {
        const like = { userId: this.userId!, replyId };
        this.postService.addLike(like).subscribe(() => this.loadPosts());
    }
}
