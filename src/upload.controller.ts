import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { bucket } from './firebase';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new Error('No se proporcionó ningún archivo.');
    }

    const blob = bucket.file(file.originalname);
    const blobStream = blob.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    return new Promise((resolve, reject) => {
      blobStream.on('error', (err) => {
        reject(`Error al subir a Firebase Storage: ${err.message}`);
      });

      blobStream.on('finish', () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        resolve({ message: 'Imagen subida exitosamente', url: publicUrl });
      });

      blobStream.end(file.buffer);
    });
  }
}