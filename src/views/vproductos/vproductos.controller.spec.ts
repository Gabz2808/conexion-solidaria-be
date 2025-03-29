import { Test, TestingModule } from '@nestjs/testing';
import { VproductosController } from './vproductos.controller';

describe('VproductosController', () => {
  let controller: VproductosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VproductosController],
    }).compile();

    controller = module.get<VproductosController>(VproductosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
