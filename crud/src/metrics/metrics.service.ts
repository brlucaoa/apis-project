import { Injectable, OnModuleInit } from '@nestjs/common';
import { Registry, Counter, Histogram, collectDefaultMetrics } from 'prom-client';
import { MyLoggerService } from '../common/logger/my-logger.service';

@Injectable()
export class MetricsService implements OnModuleInit {
  private readonly registry: Registry;
  public readonly httpRequestCounter: Counter;
  public readonly httpRequestDuration: Histogram;

  constructor(private readonly logger: MyLoggerService) {
    this.logger.setContext('Metrics');

    this.registry = new Registry();

    collectDefaultMetrics({ register: this.registry });

    this.httpRequestCounter = new Counter ({
      name: 'http_requests_local',
      help: 'Total de requests HTTP',
      labelNames: ['method', 'route', 'status'],
      registers: [this.registry],
    });

    this.httpRequestDuration = new Histogram ({
      name: 'http_requests_duration_seconds',
      help: 'Duração da requests HTTP em segundos',
      labelNames: ['method', 'route'],
      buckets: [0.1, 0.5, 1, 2, 5],
      registers: [this.registry],
    });
  }

  onModuleInit () {
    this.logger.log('Métricas Prometheus inicializadas', 'Metrics');
  }

  async getMetrics(): Promise<string> {
    return this.registry.metrics();
  }
}
