import { Test, TestingModule } from '@nestjs/testing';
import { LechangeController } from './lechange.controller';

describe('LechangeController', () => {
  let controller: LechangeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LechangeController],
    }).compile();

    controller = module.get<LechangeController>(LechangeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
