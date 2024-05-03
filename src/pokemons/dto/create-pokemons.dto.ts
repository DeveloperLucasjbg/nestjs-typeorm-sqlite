export class CreatePokemonsDto {
  name: string;
  hp: number;
  type?: string;
  attack: number;
  defense: number;
  imgUrl: string;
  speed: number;
}
