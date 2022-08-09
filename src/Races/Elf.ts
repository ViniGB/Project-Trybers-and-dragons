import Race from './Race';

class Elf extends Race {
  public _maxLifePoints;
  private static _elfInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) { 
    super(name, dexterity);
    this._maxLifePoints = 99;  
    Elf.addElf();
  }

  private static addElf() {
    this._elfInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._elfInstances;
  }
}

export default Elf;