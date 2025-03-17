import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config, cwd } from 'process';
import { join } from 'path';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AmigosModule } from './amigos/amigos.module';
import { ChatsModule } from './chats/chats.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { FavoritosModule } from './favoritos/favoritos.module';
import { GruposModule } from './grupos/grupos.module';
import { HistoriasModule } from './historias/historias.module';
import { LikesModule } from './likes/likes.module';
import { MensajesprivadosModule } from './mensajesprivados/mensajesprivados.module';
import { MiembrosgrupoModule } from './miembrosgrupo/miembrosgrupo.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { PerfilusuarioModule } from './perfilusuario/perfilusuario.module';
import { PostsModule } from './posts/posts.module';
import { ProductoModule } from './producto/producto.module';
import { ProductoguardadoModule } from './productoguardado/productoguardado.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Carga las variables de entorno globalmente
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) => ({
        type: 'postgres',
        host: ConfigService.get('DB_HOST'),
        port: +ConfigService.get('DB_PORT'),
        username: ConfigService.get('DB_USERNAME'),
        password: ConfigService.get('DB_PASSWORD'),
        database: ConfigService.get('DB_NAME'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: true,
      })
    }), UsuariosModule, AmigosModule, ChatsModule, ComentariosModule, FavoritosModule, GruposModule, HistoriasModule, LikesModule, MensajesprivadosModule, MiembrosgrupoModule, NotificacionesModule, PerfilusuarioModule, PostsModule, ProductoModule, ProductoguardadoModule, CategoriasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
