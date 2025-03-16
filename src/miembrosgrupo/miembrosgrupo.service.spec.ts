import { Test, TestingModule } from '@nestjs/testing';
import { MiembrosgrupoService } from './miembrosgrupo.service';

describe('MiembrosgrupoService', () => {
  let service: MiembrosgrupoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MiembrosgrupoService],
    }).compile();

    service = module.get<MiembrosgrupoService>(MiembrosgrupoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
