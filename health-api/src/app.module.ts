import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLoggerService } from './common/logger/my-logger.service';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { HealthModule } from './health/health.module';

@Module({
  imports: [HealthModule],
  controllers: [AppController],
  providers: [AppService,
    {
    provide: MyLoggerService,
    useValue: new MyLoggerService(),
  },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
