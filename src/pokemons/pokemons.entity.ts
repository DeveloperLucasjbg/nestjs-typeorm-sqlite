import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
@Entity("pokemonsEntities")
export class pokemonsEntities {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  attack: number;

  @Column({ name: "defense", nullable: true })
  defense: number;

  @Column({ name: "hp", nullable: true })
  hp: number;

  @Column({ name: "speed", nullable: true })
  speed: number;

  @Column({ name: "type", nullable: true })
  type: string;

  @Column({ name: "imageUrl", nullable: true })
  imageUrl: string;

  @DeleteDateColumn()
  deleteAt: Date;
}
