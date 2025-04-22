// src/likes/likes.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { Post } from '../posts/entities/post.entity';
import { PostsModule } from '../posts/posts.module';
import { UsuariosModule } from '../usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Like, Usuario, Post]),
    PostsModule,        // <-- Importa aquí el módulo
    UsuariosModule,
  ],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
