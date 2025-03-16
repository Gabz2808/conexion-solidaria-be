import { Test, TestingModule } from '@nestjs/testing';
import { PerfilusuarioController } from './perfilusuario.controller';
import { PerfilusuarioService } from './perfilusuario.service';

describe('PerfilusuarioController', () => {
  let controller: PerfilusuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerfilusuarioController],
      providers: [PerfilusuarioService],
    }).compile();

    controller = module.get<PerfilusuarioController>(PerfilusuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
