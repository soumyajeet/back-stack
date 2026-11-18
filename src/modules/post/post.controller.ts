import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';   
import { PostService } from './post.service.js';
import type { Posts } from './post.service.js';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get()
    getPosts(): Posts[] {
        return this.postService.getPosts();
    }

    @Post()
    createPost(@Body() post: Posts): { message: string } {
        return this.postService.createPost(post);
    }
}
