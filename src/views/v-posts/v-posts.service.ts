import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { VPostsEntity } from './entities/v-posts.entity';

@Injectable()
export class VPostsService {
  constructor(
    @InjectRepository(VPostsEntity)
    private readonly postRepository: Repository<VPostsEntity>,
  ) {}

  async getAllPosts(): Promise<VPostsEntity[]> {
    return this.postRepository.find();
  }

  async getPostsByIdAutor(idautor: number): Promise<VPostsEntity[]> {
      return this.postRepository.find({
        where: { idautor: idautor}
      });
    }
}
