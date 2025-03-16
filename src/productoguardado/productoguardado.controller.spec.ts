import { Test, TestingModule } from '@nestjs/testing';
import { ProductoguardadoController } from './productoguardado.controller';
import { ProductoguardadoService } from './productoguardado.service';

describe('ProductoguardadoController', () => {
  let controller: ProductoguardadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoguardadoController],
      providers: [ProductoguardadoService],
    }).compile();

    controller = module.get<ProductoguardadoController>(ProductoguardadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
