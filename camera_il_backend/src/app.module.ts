import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenImouController } from './open-imou/open-imou.controller';
import { LechangeController } from './lechange/lechange.controller';

@Module({
  imports: [],
  controllers: [AppController, OpenImouController, LechangeController],
  providers: [AppService],
})
export class AppModule {}
