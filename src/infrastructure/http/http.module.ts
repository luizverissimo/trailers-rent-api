import { Module } from '@nestjs/common'
import { HealthCheckController } from './controllers/health-check.controller'
import { CreateRenterController } from './controllers/save-renter.controller'
import { CreateRenterUseCase } from '@/domain/renting/application/use-cases/renter/create-renter.use-case'
import { RentersRepositoryModule } from '../databases/postgres/typeorm/repositories/typeorm-renters.module'

@Module({
  imports: [RentersRepositoryModule],
  controllers: [HealthCheckController, CreateRenterController],
  providers: [CreateRenterUseCase],
})
export class HttpModule {}
