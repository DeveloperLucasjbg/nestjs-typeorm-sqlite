import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BattleService } from "./battle.service";
import { PokemonsController } from "./pokemons.controller";
import { pokemonsEntities } from "./pokemons.entity";
import { PokemonsService } from "./pokemons.service";
import { resgisterEntities } from "./register.entity";

@Module({
  imports: [TypeOrmModule.forFeature([pokemonsEntities, resgisterEntities])],
  controllers: [PokemonsController],
  providers: [PokemonsService, BattleService],
})
export class PokemonsModule {}
