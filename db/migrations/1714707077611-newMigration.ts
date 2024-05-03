import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1714707077611 implements MigrationInterface {
    name = 'NewMigration1714707077611'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_pokemonsEntities" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar, "attack" integer, "defense" integer, "hp" integer, "speed" integer, "type" varchar, "imageUrl" varchar, "deleteAt" datetime)`);
        await queryRunner.query(`INSERT INTO "temporary_pokemonsEntities"("id", "name", "attack", "defense", "hp", "speed", "type", "imageUrl", "deleteAt") SELECT "id", "name", "attack", "defense", "hp", "speed", "type", "imageUrl", "deleteAt" FROM "pokemonsEntities"`);
        await queryRunner.query(`DROP TABLE "pokemonsEntities"`);
        await queryRunner.query(`ALTER TABLE "temporary_pokemonsEntities" RENAME TO "pokemonsEntities"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemonsEntities" RENAME TO "temporary_pokemonsEntities"`);
        await queryRunner.query(`CREATE TABLE "pokemonsEntities" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar, "attack" integer, "defense" integer, "hp" integer, "speed" integer, "type" varchar, "imageUrl" varchar, "deleteAt" datetime, "generation" varchar)`);
        await queryRunner.query(`INSERT INTO "pokemonsEntities"("id", "name", "attack", "defense", "hp", "speed", "type", "imageUrl", "deleteAt") SELECT "id", "name", "attack", "defense", "hp", "speed", "type", "imageUrl", "deleteAt" FROM "temporary_pokemonsEntities"`);
        await queryRunner.query(`DROP TABLE "temporary_pokemonsEntities"`);
    }

}
