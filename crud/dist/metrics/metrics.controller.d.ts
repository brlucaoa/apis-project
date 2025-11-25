import { MetricsService } from '../metrics/metrics.service';
export declare class MetricsController {
    private readonly metricsService;
    constructor(metricsService: MetricsService);
    getMetrics(): Promise<string>;
}
