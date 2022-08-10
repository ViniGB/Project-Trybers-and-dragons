import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  private _player;
  private _monsters;

  constructor(
    player: Character | Fighter,
    monsters: Monster[] | Fighter[] | SimpleFighter[],
  ) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  fight(): number {
    for (let index = 0; index < 500; index += 1) {
      this._monsters.forEach((monster) => {
        this._player.attack(monster);
        monster.attack(this._player);
      });
      if (this._player.lifePoints === -1
        || this._monsters.every((monster) => monster.lifePoints === -1)) break;
    }
    return super.fight();
  }
}

export default PVE;