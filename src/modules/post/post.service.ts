import { Injectable } from '@nestjs/common';

export interface Posts {
   
  id: number;
  category: string;
  title: string;
}

@Injectable()
export class PostService {
    private readonly posts: Posts[] = [
        { id: 1, category: 'Category 1', title: 'Post 1' },
        { id: 2, category: 'Category 2', title: 'Post 2' },
        { id: 3, category: 'Category 3', title: 'Post 3' },
        { id: 4, category: 'Category 4', title: 'Post 4' },
        { id: 5, category: 'Category 5', title: 'Post 5' },
        { id: 6, category: 'Category 6', title: 'Post 6' },
        { id: 7, category: 'Category 7', title: 'Post 7' },
        { id: 8, category: 'Category 8', title: 'Post 8' },
        { id: 9, category: 'Category 9', title: 'Post 9' },
    ];

    getPosts(): Posts[] {
        return this.posts;
    }

    createPost(post: Posts): { message: string } {
        this.posts.push(post);
        return { message: 'Post created successfully' };
    }
}
