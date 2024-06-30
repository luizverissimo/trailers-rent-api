import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTrailersTable1719755517453 implements MigrationInterface {
    name = 'CreateTrailersTable1719755517453'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "trailers-renters"."trailers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tenant-id" text NOT NULL, "model" character varying NOT NULL, "brand" character varying NOT NULL, "description" character varying NOT NULL, "photo" character varying NOT NULL, "pricePerDay" integer NOT NULL, "unavailable" boolean NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, CONSTRAINT "PK_598af6bec45fafbf70437f32b8b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "trailers-renters"."trailers"`);
    }

}
