import { Test, TestingModule } from '@nestjs/testing';
import { VusuariosController } from './vusuarios.controller';

describe('VusuariosController', () => {
  let controller: VusuariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VusuariosController],
    }).compile();

    controller = module.get<VusuariosController>(VusuariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
