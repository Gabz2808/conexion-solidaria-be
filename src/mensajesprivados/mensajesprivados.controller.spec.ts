import { Test, TestingModule } from '@nestjs/testing';
import { MensajesprivadosController } from './mensajesprivados.controller';
import { MensajesprivadosService } from './mensajesprivados.service';

describe('MensajesprivadosController', () => {
  let controller: MensajesprivadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MensajesprivadosController],
      providers: [MensajesprivadosService],
    }).compile();

    controller = module.get<MensajesprivadosController>(MensajesprivadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
