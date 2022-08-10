import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player1;
  private _player2;

  constructor(
    player1: Character | Fighter,
    player2: Character | Fighter,
  ) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    for (let index = 0; index < 500; index += 1) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
      if (this._player1.lifePoints === -1
        || this._player2.lifePoints === -1) break;
    }
    return super.fight();
  }
}

export default PVP;