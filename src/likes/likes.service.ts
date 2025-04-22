import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from './entities/like.entity';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { Post } from '../posts/entities/post.entity';
import { Usuario } from '../usuarios/entities/usuario.entity';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like) private likeRepo: Repository<Like>,
    @InjectRepository(Post) private postRepo: Repository<Post>,
    @InjectRepository(Usuario) private usuarioRepo: Repository<Usuario>,
  ) {}

  async create(createLikeDto: CreateLikeDto): Promise<Like> {
    const post = await this.postRepo.findOneByOrFail({ idposts: createLikeDto.idpost });
    const usuario = await this.usuarioRepo.findOneByOrFail({ idusuario: createLikeDto.idusuario });

    const like = this.likeRepo.create({ post, usuario });
    return this.likeRepo.save(like);
  }

  async findAll(): Promise<Like[]> {
    return this.likeRepo.find({ relations: ['post', 'usuario'] });
  }

  async findOne(idlike: number): Promise<Like> {
    const like = await this.likeRepo.findOne({
      where: { idlike },
      relations: ['post', 'usuario'],
    });
    if (!like) throw new NotFoundException('Like no encontrado');
    return like;
  }

  async update(idlike: number, updateLikeDto: UpdateLikeDto): Promise<Like> {
    const like = await this.findOne(idlike);

    if (updateLikeDto.idpost) {
      like.post = await this.postRepo.findOneByOrFail({ idposts: updateLikeDto.idpost });
    }

    if (updateLikeDto.idusuario) {
      like.usuario = await this.usuarioRepo.findOneByOrFail({ idusuario: updateLikeDto.idusuario });
    }

    return this.likeRepo.save(like);
  }

  async remove(idlike: number): Promise<void> {
    const like = await this.findOne(idlike);
    await this.likeRepo.remove(like);
  }

  async toggleLike(idpost: number, idusuario: number): Promise<{ liked: boolean }> {
    // Verifica si existe un "like" para esta combinación de post y usuario
    const existingLike = await this.likeRepo.findOne({
      where: { post: { idposts: idpost }, usuario: { idusuario } },
      relations: ['post', 'usuario'],
    });
  
    if (existingLike) {
      // Si el "like" ya existe, elimina el "like"
      await this.likeRepo.remove(existingLike);
      return { liked: false }; // El "like" fue eliminado
    } else {
      // Si no existe el "like", crea uno nuevo
      const post = await this.postRepo.findOneByOrFail({ idposts: idpost });
      const usuario = await this.usuarioRepo.findOneByOrFail({ idusuario });
  
      // Crea un nuevo "like"
      const newLike = this.likeRepo.create({ post, usuario });
      try {
        await this.likeRepo.save(newLike);
        return { liked: true }; // El "like" fue creado
      } catch (error) {
        if (error.code === '23505') {
          // Maneja el error de duplicado
          throw new Error('El like ya existe.');
        }
        throw error;
      }
    }
  }
  
}
