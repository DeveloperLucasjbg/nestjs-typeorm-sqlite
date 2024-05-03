let player = null;
let enemy = null;
export default function battleSystem(p1, pc) {
  player = p1;
  enemy = pc;

  if (!player || !enemy || !player.id || !enemy.id) {
    throw { message: "Pokemon not found" };
  }
  player.who = "player";
  enemy.who = "enemy";
  return battle();
}

function isAlive(pokemon) {
  return pokemon.hp > 0;
}
const calculateDamage = (attacker, defender) => {
  const damage = attacker.attack - defender.defense;
  return damage > 0 ? damage : 1;
};
const doAttack = (attacker, defender) => {
  console.log(`${attacker.who} attacks ${defender.who}`);
  calculateDamage(attacker, defender);
  const value = defender.hp - calculateDamage(attacker, defender);
  defender.who === "player" ? (player.hp = value) : (enemy.hp = value);
};
const setVelocities = () => {
  if (
    player.speed > enemy.speed ||
    (player.speed === enemy.speed && player.attack >= enemy.attack)
  ) {
    player.condition = "fast";
    enemy.condition = "slow";
  } else {
    player.condition = "slow";
    enemy.condition = "fast";
  }
};
const findFastest = (pokes) => {
  return pokes.find((poke) => poke.condition === "fast");
};
const findSlowest = (pokes) => {
  return pokes.find((poke) => poke.condition === "slow");
};
const makeResult = () => {
  return {
    winner: player.hp > enemy.hp ? "player" : "enemy",
    leftlife: player.hp > enemy.hp ? player.hp : enemy.hp,
    date: new Date(),
    player: player.name,
    enemy: enemy.name,
  };
};

function battle() {
  setVelocities();
  while (isAlive(player) && isAlive(enemy)) {
    doAttack(findFastest([player, enemy]), findSlowest([player, enemy]));
    if (isAlive(findSlowest([player, enemy]))) {
      doAttack(findSlowest([player, enemy]), findFastest([player, enemy]));
    }
  }
  return makeResult();
}
