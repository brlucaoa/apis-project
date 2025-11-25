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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const my_logger_service_1 = require("../logger/my-logger.service");
const metrics_service_1 = require("../../metrics/metrics.service");
let LoggingInterceptor = class LoggingInterceptor {
    logger;
    metrics;
    constructor(logger, metrics) {
        this.logger = logger;
        this.metrics = metrics;
        this.logger.setContext('HTTP');
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const { method, url } = request;
        const route = url.split('?')[0];
        const now = Date.now();
        this.logger.log(`=> ${method} ${url}`, 'HTTP');
        let timer = null;
        if (this.metrics) {
            timer = this.metrics.httpRequestDuration.startTimer({
                method,
                route,
            });
        }
        return next.handle().pipe((0, operators_1.tap)({
            next: () => {
                const response = context.switchToHttp().getResponse();
                const { statusCode } = response;
                const time = Date.now() - now;
                if (this.metrics) {
                    this.metrics.httpRequestCounter.inc({
                        method,
                        route,
                        status: statusCode,
                    });
                    if (timer)
                        timer();
                }
                this.logger.log(`<=> ${method} ${url} ${statusCode} - ${time}  `, 'HTTP');
            },
            error: (error) => {
                const time = Date.now() - now;
                const statusCode = error.statusCode || 500;
                if (this.metrics) {
                    if (timer)
                        timer();
                    this.metrics.httpRequestCounter.inc({
                        method,
                        route,
                        status: statusCode,
                    });
                }
                this.logger.error(`${method} ${url} ${statusCode} - ${time}  ${error.message}`, 'HTTP');
            },
        }));
    }
};
exports.LoggingInterceptor = LoggingInterceptor;
exports.LoggingInterceptor = LoggingInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Optional)()),
    __param(1, (0, common_1.Inject)(metrics_service_1.MetricsService)),
    __metadata("design:paramtypes", [my_logger_service_1.MyLoggerService,
        metrics_service_1.MetricsService])
], LoggingInterceptor);
//# sourceMappingURL=logging.interceptor.js.map