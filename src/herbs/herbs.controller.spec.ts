import { Test, TestingModule } from '@nestjs/testing';
import { HerbsController } from './herbs.controller';
import { HerbsService } from './herbs.service';

describe('HerbsController', () => {
  let controller: HerbsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HerbsController],
      providers: [HerbsService],
    }).compile();

    controller = module.get<HerbsController>(HerbsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
