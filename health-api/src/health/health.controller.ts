import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, HealthCheck, MemoryHealthIndicator, DiskHealthIndicator,} from '@nestjs/terminus';
import  { MyLoggerService } from '../common/logger/my-logger.service';


@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private memory: MemoryHealthIndicator,
    private disk: DiskHealthIndicator,
    private logger: MyLoggerService,
  ){
    this.logger.setContext('HealthCheck');
  }
  @Get()
  @HealthCheck()
  check(){
    this.logger.log('Health check executado', 'Healthchek');

    return this.health.check([
      () => this.memory.checkHeap('memory_heal', 300*1024*1024),

      () => this.memory.checkRSS('memory_rss', 30+1024*1024),

      () => this.disk.checkStorage('storage', {
        path: '/',
        threshold: 0.9,
      }),
    ]);
  }

  @Get('live')
  @HealthCheck()
  liveness() {
    return this.health.check([
      () => ({
        app: {
          status: 'up'
        },
      }),
    ]);
  }

  @Get('ready')
  @HealthCheck()
  readiness() {
    return this.health.check([
      () => ({
        app: {
          status: 'up'
        },
      }),
    ]);
  }
}
