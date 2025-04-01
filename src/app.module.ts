import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { VPostsModule } from './views/v-posts/v-posts.module';
import { VproductosModule } from './views/vproductos/vproductos.module';
import { VgruposModule } from './views/vgrupos/vgrupos.module';
import { VusuariosModule } from './views/vusuarios/vusuarios.module';

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
        synchronize: false,
      }),
    }),
    // Otros módulos de tu aplicación
    UsuariosModule,
    AmigosModule,
    ChatsModule,
    ComentariosModule,
    FavoritosModule,
    GruposModule,
    HistoriasModule,
    LikesModule,
    MensajesprivadosModule,
    MiembrosgrupoModule,
    NotificacionesModule,
    PerfilusuarioModule,
    PostsModule,
    ProductoModule,
    ProductoguardadoModule,
    CategoriasModule,
    AuthModule,
    VPostsModule,
    VproductosModule, 
    VgruposModule,
    VusuariosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
