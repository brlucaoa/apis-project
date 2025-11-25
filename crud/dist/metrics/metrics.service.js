"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsService = void 0;
const common_1 = require("@nestjs/common");
const prom_client_1 = require("prom-client");
const my_logger_service_1 = require("../common/logger/my-logger.service");
let MetricsService = class MetricsService {
    logger;
    registry;
    httpRequestCounter;
    httpRequestDuration;
    constructor(logger) {
        this.logger = logger;
        this.logger.setContext('Metrics');
        this.registry = new prom_client_1.Registry();
        (0, prom_client_1.collectDefaultMetrics)({ register: this.registry });
        this.httpRequestCounter = new prom_client_1.Counter({
            name: 'http_requests_local',
            help: 'Total de requests HTTP',
            labelNames: ['method', 'route', 'status'],
            registers: [this.registry],
        });
        this.httpRequestDuration = new prom_client_1.Histogram({
            name: 'http_requests_duration_seconds',
            help: 'Duração da requests HTTP em segundos',
            labelNames: ['method', 'route'],
            buckets: [0.1, 0.5, 1, 2, 5],
            registers: [this.registry],
        });
    }
    onModuleInit() {
        this.logger.log('Métricas Prometheus inicializadas', 'Metrics');
    }
    async getMetrics() {
        return this.registry.metrics();
    }
};
exports.MetricsService = MetricsService;
exports.MetricsService = MetricsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [my_logger_service_1.MyLoggerService])
], MetricsService);
//# sourceMappingURL=metrics.service.js.map