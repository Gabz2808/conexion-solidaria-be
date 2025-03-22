import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para el dominio de tu frontend
  app.enableCors({
    origin: 'http://localhost:5173', // Cambia este URL por el de tu frontend
    methods: 'GET,POST', // Métodos permitidos
    allowedHeaders: 'Content-Type,Authorization', // Cabeceras permitidas
  });

  await app.listen(3000);
}
bootstrap();
