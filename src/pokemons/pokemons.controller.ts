import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { BattleService } from "./battle.service";
import battleSystem from "./bussines/battleSystem";
import { CreatePokemonsDto } from "./dto/create-pokemons.dto";
import { PokemonsService } from "./pokemons.service";

@Controller("pokemons")
export class PokemonsController {
  constructor(
    private readonly pokemonsService: PokemonsService,
    private readonly battleService: BattleService,
  ) {}

  @Post()
  create(@Body() createPokemonsDto: CreatePokemonsDto) {
    return this.pokemonsService.create(createPokemonsDto);
  }

  @Get()
  findAll() {
    return this.pokemonsService.findAll();
  }

  @Post("battle/")
  async fight(@Query() query: { player: string; enemy: string }) {
    try {
      const db = await this.pokemonsService.findAll();
      const player = { ...db.find((pokemon) => pokemon.id == query.player) }; //dummy comparacion cambiar la autogeneracion a string
      const enemy = { ...db.find((pokemon) => pokemon.id == query.enemy) };
      const res = battleSystem(player, enemy);
      this.battleService.register(res);
      return res;
    } catch (err) {
      return err;
    }
  }
}
