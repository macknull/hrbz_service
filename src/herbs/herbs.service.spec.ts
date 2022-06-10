import { Test, TestingModule } from '@nestjs/testing';
import { HerbsService } from './herbs.service';

describe('HerbsService', () => {
  let service: HerbsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HerbsService],
    }).compile();

    service = module.get<HerbsService>(HerbsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
