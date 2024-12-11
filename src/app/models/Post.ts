interface Post {
    id?: number;
    title: string;
    content: string;
    userId: number;
    comments?: Comment[];
}
