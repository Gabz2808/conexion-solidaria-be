import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

@Get(':idpost')
  findOne(@Param('idpost') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':idpost')
  update(@Param('idpost') id: string, @Body() updatePostsDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostsDto);
  }

  @Delete(':idpost')
  remove(@Param('idpost') id: string) {
    return this.postsService.remove(+id);
  }

  @Put(':idpost')
  replace(@Param('idpost') id: string, @Body() updatePostsDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostsDto);
  }
}
