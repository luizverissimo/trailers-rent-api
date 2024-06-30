import { EnvironmentService } from '@/infrastructure/environment/environment.service'
import { Global, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'
import { models } from './typeorm/models'
import { EnvironmentModule } from '@/infrastructure/environment/environment.module'
import { RentersRepositoryModule } from './typeorm/repositories/typeorm-renters.module'

@Global()
@Module({
  imports: [
    RentersRepositoryModule,
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentModule],
      useFactory: (configService: EnvironmentService) => ({
        type: 'postgres',
        host: configService.get('RENTING_DATABASE_HOST'),
        port: configService.get('RENTING_DATABASE_PORT'),
        username: configService.get('RENTING_DATABASE_USER'),
        password: configService.get('RENTING_DATABASE_PASSWORD'),
        database: configService.get('RENTING_DATABASE_NAME'),
        schema: configService.get('RENTING_DATABASE_SCHEMA'),
        entities: [...models],
        synchronize: false,
      }),
      dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options).initialize()
        return dataSource
      },
      inject: [EnvironmentService],
    }),
  ],
  exports: [RentersRepositoryModule],
})
export class RentingDatabaseModule {}
