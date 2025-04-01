import { Test, TestingModule } from '@nestjs/testing';
import { VusuariosService } from './vusuarios.service';

describe('VusuariosService', () => {
  let service: VusuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VusuariosService],
    }).compile();

    service = module.get<VusuariosService>(VusuariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
