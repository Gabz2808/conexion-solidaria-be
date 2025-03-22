import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Para manejar la base de datos
import { PerfilusuarioService } from './perfilusuario.service';
import { PerfilusuarioController } from './perfilusuario.controller';
import { Perfilusuario } from './entities/perfilusuario.entity';
import { JwtModule } from '@nestjs/jwt'; // Importa el JwtModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Perfilusuario]),  // Importa el repositorio de Perfilusuario
    JwtModule.register({                        // Configura el JwtModule
      secret: 'yourSecretKey',                   // Define tu clave secreta
      signOptions: { expiresIn: '1h' },         // Opcional: define el tiempo de expiración del token
    }),
  ],
  controllers: [PerfilusuarioController],
  providers: [PerfilusuarioService],
})
export class PerfilusuarioModule {}
