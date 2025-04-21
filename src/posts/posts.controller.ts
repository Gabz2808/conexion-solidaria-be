import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { bucket } from '../firebase';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { randomUUID } from 'crypto'; // importa esto arriba

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createPost(
    @UploadedFile() file: Express.Multer.File,
    @Body() createPostDto: CreatePostDto,
  ) {
    try {
      let imageUrl: string | null = null;
  
      if (file) {
        const fileName = `${Date.now()}-${file.originalname}`;
        const destination = `${createPostDto.idusuario}/posts/${fileName}`;
        const fileUpload = bucket.file(destination);
  
        const token = randomUUID();
  
        await fileUpload.save(file.buffer, {
          metadata: {
            contentType: file.mimetype,
            metadata: {
              firebaseStorageDownloadTokens: token,
            },
          },
        });
  
        const encodedPath = encodeURIComponent(destination);
        imageUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodedPath}?alt=media&token=${token}`;
      }
  
      const post = {
        ...createPostDto,
        fechacreacion: new Date(),
        imagen: imageUrl ?? undefined,
      };
  
      console.log('Post creado:', post);
  
      return this.postsService.create(post);
    } catch (error) {
      console.error('Error al crear el post:', error);
      throw error;
    }
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
