import { Module } from '@nestjs/common';
import { MetricsController } from './metrics.controller';
import { MetricsService } from './metrics.service';
import {MyLoggerService} from '../common/logger/my-logger.service';

@Module({
  controllers: [MetricsController],
  providers: [MetricsService, MyLoggerService],
  exports: [MetricsService],
})
export class MetricsModule {}
