## First 

Viene incluida la db base con el json de ejemplo.
en caso de querer hacer una migracion por cambio de entindades aplica los cambios y permanecen los pokemons guardados.
en caso de borrar la db, al levantar el servicio se crean las tablas, tambien se crean con los scripts de migraciones pero no carga los pokemons, se pueden cargar con el endpoint POST /pokemons, ejemplo mas abajo.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
# watch mode
$ npm run start:dev
# production mode
$ npm run start:prod
```

## migrations scripts
```bash
$ npm run typeorm -- migration:generate ## compara las entidades del nest y las de la db, en caso de ver diferencias crea el script para ejecutar con el migration:run
$ npm run typeorm -- migration:run ## ejecuta el script generado con el generate
$ npm run typeorm -- migration:revert ## ejecuta rollback
```

## endPoints
```bash
GET localhost:3000/pokemons // LISTA TODOS LOS POKEMONS
POST localhost:3000/pokemons/battle?player=1&enemy=5 // ejecuta battleSystem, acepta solo id numericos por query
POST localhost:3000/pokemons # AGREGA A LA LISTA UN POKEMON por body
```
# ejemplo para agregar pokemon a la db:
# {   
#  "name": "Eevee",
#  "attack": 4,
#  "defense": 3,
#  "hp": 4,
#  "speed": 5,
#  "type": "Type",
#  "imageUrl": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png"
#  }




