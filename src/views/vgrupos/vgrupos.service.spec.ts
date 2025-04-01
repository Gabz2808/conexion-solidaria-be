import { Test, TestingModule } from '@nestjs/testing';
import { VgruposService } from './vgrupos.service';

describe('VgruposService', () => {
  let service: VgruposService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VgruposService],
    }).compile();

    service = module.get<VgruposService>(VgruposService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
