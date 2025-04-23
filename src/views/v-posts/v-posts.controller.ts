import { Controller, Get, Param } from '@nestjs/common';
import { VPostsService } from './v-posts.service';
import { VPostsEntity } from './entities/v-posts.entity';


@Controller('v-posts')
export class VPostsController {
 constructor(private readonly postsService: VPostsService) {}

  @Get()
  async getPosts(): Promise<VPostsEntity[]> {
    return this.postsService.getAllPosts();
  }

  @Get('id/:idautor')
    async getPostsByIdAutor(@Param('idautor') idautor: number): Promise<VPostsEntity[]> {
      return this.postsService.getPostsByIdAutor(idautor);
    }

}
