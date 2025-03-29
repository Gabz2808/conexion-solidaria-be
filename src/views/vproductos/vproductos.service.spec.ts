import { Test, TestingModule } from '@nestjs/testing';
import { VproductosService } from './vproductos.service';

describe('VproductosService', () => {
  let service: VproductosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VproductosService],
    }).compile();

    service = module.get<VproductosService>(VproductosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
