import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RentersModel } from '../models/renter.model'
import { RentersRepository } from '@/domain/renting/application/repositories/renters-repository'
import { TypeormRentersRepository } from './typeorm-renters-repository'

@Module({
  imports: [TypeOrmModule.forFeature([RentersModel])],
  providers: [
    {
      provide: RentersRepository,
      useClass: TypeormRentersRepository,
    },
  ],
  exports: [RentersRepository],
})
export class RentersRepositoryModule {}
