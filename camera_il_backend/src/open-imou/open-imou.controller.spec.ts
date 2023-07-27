import { Test, TestingModule } from '@nestjs/testing';
import { OpenImouController } from './open-imou.controller';

describe('OpenImouController', () => {
  let controller: OpenImouController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenImouController],
    }).compile();

    controller = module.get<OpenImouController>(OpenImouController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
