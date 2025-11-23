import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { MyLoggerService } from '../common/logger/my-logger.service';

@Module({
  imports: [TerminusModule],
  providers: [MyLoggerService],
  controllers: [HealthController]
})
export class HealthModule {}
