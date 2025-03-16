import { Test, TestingModule } from '@nestjs/testing';
import { PerfilusuarioService } from './perfilusuario.service';

describe('PerfilusuarioService', () => {
  let service: PerfilusuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerfilusuarioService],
    }).compile();

    service = module.get<PerfilusuarioService>(PerfilusuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
