import { Test, TestingModule } from '@nestjs/testing';
import { MiembrosgrupoController } from './miembrosgrupo.controller';
import { MiembrosgrupoService } from './miembrosgrupo.service';

describe('MiembrosgrupoController', () => {
  let controller: MiembrosgrupoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MiembrosgrupoController],
      providers: [MiembrosgrupoService],
    }).compile();

    controller = module.get<MiembrosgrupoController>(MiembrosgrupoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
