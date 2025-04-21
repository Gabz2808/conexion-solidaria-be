import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
     constructor(
       @InjectRepository(Post)
       private readonly postsRepository: Repository<Post>) { }
  
     async create(createPostDto: CreatePostDto) {
       const post = this.postsRepository.create(createPostDto);
       return await this.postsRepository.save(post);
     }
   
     async findAll() {
       return  await this.postsRepository.find();
     }
   
     
     async findOne(idposts: number) {
       return await this.postsRepository.findOne({ where: { idposts } });
     }
   
     async update(id: number, updatePostDto: UpdatePostDto) {
       const post = await this.findOne(id);
       if (!post) {
         throw new NotFoundException('Post not found');
       }
       Object.assign(post, updatePostDto);
       return await this.postsRepository.save(post);
     }
   
     async remove(id: number) {
       const post = await this.findOne(id);
       if (!post) {
         throw new NotFoundException('Post not found');
       }
   
       return await this.postsRepository.remove(post);
     }
}
