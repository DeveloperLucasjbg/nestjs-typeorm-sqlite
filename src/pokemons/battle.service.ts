import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { resgisterEntities } from "./register.entity";

export class BattleService {
  constructor(
    @InjectRepository(resgisterEntities)
    private readonly registerRepository: Repository<resgisterEntities>,
  ) {}

  register(body: any) {
    const register = this.registerRepository.create(body);
    this.registerRepository.save(register);
  }
}
