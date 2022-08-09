import Race from './Race';

class Halfling extends Race {
  public _maxLifePoints;
  private static _halflingInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) { 
    super(name, dexterity);
    this._maxLifePoints = 60; 
    Halfling.addHalfling(); 
  }

  private static addHalfling() {
    this._halflingInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._halflingInstances;
  }
}

export default Halfling;