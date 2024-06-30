import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTenantsTable1719753668519 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "${process.env.RENTING_DATABASE_SCHEMA}"."tenants" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "photo" character varying NOT NULL, CONSTRAINT "PK_6227c974d2f3c7ce77f208147ca" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP TABLE "${process.env.RENTING_DATABASE_SCHEMA}"."tenants"`
    )
  }
}
