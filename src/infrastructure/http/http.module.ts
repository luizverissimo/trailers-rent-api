import { Module } from '@nestjs/common'
import { HealthCheckController } from './core/health-check.controller'

@Module({ controllers: [HealthCheckController] })
export class HttpModule {}
