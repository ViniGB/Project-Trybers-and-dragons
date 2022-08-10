import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Jack');
const player2 = new Character('Zack');
const player3 = new Character('Derek');
player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player1, player2);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[] = []) {
  for (let index = 0; index < 500; index += 1) {
    battles.forEach((battle) => battle.fight());
  }
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};