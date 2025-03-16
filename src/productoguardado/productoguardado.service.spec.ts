import { Test, TestingModule } from '@nestjs/testing';
import { ProductoguardadoService } from './productoguardado.service';

describe('ProductoguardadoService', () => {
  let service: ProductoguardadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoguardadoService],
    }).compile();

    service = module.get<ProductoguardadoService>(ProductoguardadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
