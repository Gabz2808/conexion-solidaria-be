import { Test, TestingModule } from '@nestjs/testing';
import { VgruposController } from './vgrupos.controller';

describe('VgruposController', () => {
  let controller: VgruposController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VgruposController],
    }).compile();

    controller = module.get<VgruposController>(VgruposController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
