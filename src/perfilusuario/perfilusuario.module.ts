import { Module } from '@nestjs/common';
import { PerfilusuarioService } from './perfilusuario.service';
import { PerfilusuarioController } from './perfilusuario.controller';

@Module({
  controllers: [PerfilusuarioController],
  providers: [PerfilusuarioService],
})
export class PerfilusuarioModule {}
