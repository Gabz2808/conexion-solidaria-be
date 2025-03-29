import { Test, TestingModule } from '@nestjs/testing';
import { VPostsController } from './v-posts.controller';

describe('VPostsController', () => {
  let controller: VPostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VPostsController],
    }).compile();

    controller = module.get<VPostsController>(VPostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
