import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { pokemonsEntities } from "./pokemons.entity";

export class PokemonsService {
  constructor(
    @InjectRepository(pokemonsEntities)
    private readonly pokemonsRepository: Repository<pokemonsEntities>,
  ) {}

  create(body: any) {
    const pokemon = this.pokemonsRepository.create(body);
    return this.pokemonsRepository.save(pokemon);
  }
  findAll() {
    return this.pokemonsRepository.find();
  }
}
