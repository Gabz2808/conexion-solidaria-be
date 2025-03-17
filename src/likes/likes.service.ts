import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Like } from './entities/like.entity';

@Injectable()
export class LikesService {

     constructor(
       @InjectRepository(Like)
       private readonly likesRepository: Repository<Like>) { }
  
     async create(createLikeDto: CreateLikeDto) {
       const like = this.likesRepository.create(createLikeDto);
   
       return await this.likesRepository.save(like);
     }
   
     async findAll() {
       return  await this.likesRepository.find();
     }
   
     
     async findOne(idlike: number) {
       return await this.likesRepository.findOne({ where: { idlike } });
     }
   
     async update(id: number, updateLikeDto: UpdateLikeDto) {
       const like = await this.findOne(id);
       if (!like) {
         throw new NotFoundException('Like not found');
       }
       Object.assign(like, updateLikeDto);
       return await this.likesRepository.save(like);
     }
   
     async remove(id: number) {
       const like = await this.findOne(id);
       if (!like) {
         throw new NotFoundException('Like not found');
       }
   
       return await this.likesRepository.remove(like);
     }
}
