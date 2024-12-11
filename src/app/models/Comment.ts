interface Comment {
    id?: number;
    text: string;
    userId: number;
    postId: number;
    replies?: Reply[];
}
