import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { dataSourceOptions } from "../db/data-source";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PokemonsModule } from "./pokemons/pokemons.module";
@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), PokemonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
