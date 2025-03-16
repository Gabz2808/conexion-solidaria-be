import { Test, TestingModule } from '@nestjs/testing';
import { MensajesprivadosService } from './mensajesprivados.service';

describe('MensajesprivadosService', () => {
  let service: MensajesprivadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MensajesprivadosService],
    }).compile();

    service = module.get<MensajesprivadosService>(MensajesprivadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
