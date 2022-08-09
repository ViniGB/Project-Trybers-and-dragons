import Race from './Race';

class Orc extends Race {
  public _maxLifePoints;
  private static _orcInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) { 
    super(name, dexterity);
    this._maxLifePoints = 74;  
    Orc.addOrc(); 
  }

  private static addOrc() {
    this._orcInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._orcInstances;
  }
}

export default Orc;