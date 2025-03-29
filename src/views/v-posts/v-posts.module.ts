import { Module } from '@nestjs/common';
import { VPostsService } from './v-posts.service';
import { VPostsController } from './v-posts.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { VPostsEntity } from './entities/v-posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VPostsEntity])], // Registrar la vista
  providers: [VPostsService],
  controllers: [VPostsController]
})
export class VPostsModule {}
