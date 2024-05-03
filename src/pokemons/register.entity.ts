import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
@Entity("resgisterEntities")
export class resgisterEntities {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ nullable: true })
  player: string;

  @Column({ nullable: true })
  enemy: number;

  @Column({ nullable: true })
  winner: number;

  @Column({ nullable: true })
  leftlife: number;

  @Column({ nullable: true })
  date: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
