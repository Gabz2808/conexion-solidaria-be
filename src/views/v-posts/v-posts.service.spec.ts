import { Test, TestingModule } from '@nestjs/testing';
import { VPostsService } from './v-posts.service';

describe('VPostsService', () => {
  let service: VPostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VPostsService],
    }).compile();

    service = module.get<VPostsService>(VPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
