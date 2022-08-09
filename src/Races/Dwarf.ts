import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints;
  private static _orcInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) { 
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.addDwarf();
  }

  private static addDwarf() {
    this._orcInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._orcInstances;
  }
}

export default Dwarf;