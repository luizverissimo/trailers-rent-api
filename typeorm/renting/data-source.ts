import 'dotenv/config'
import { DataSource, DataSourceOptions } from 'typeorm'

const port = process.env.RENTING_DATABASE_PORT
  ? parseInt(process.env.RENTING_DATABASE_PORT)
  : 5432

export const dataSourceOptions: DataSourceOptions = {
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: process.env.RENTING_DATABASE_HOST,
  port,
  username: process.env.RENTING_DATABASE_USER,
  password: process.env.RENTING_DATABASE_PASSWORD,
  database: process.env.RENTING_DATABASE_NAME,
  logging: true,
  synchronize: false,
  schema: process.env.RENTING_DATABASE_SCHEMA,
  entities: ['src/**/**.model{.ts,.js}'],
  migrations: ['typeorm/renting/migrations/**/*{.ts,.js}'],
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource
