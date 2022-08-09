import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType;
  private static _rangerInstances = 0;

  constructor(
    name: string,
  ) { 
    super(name);
    this._energyType = 'stamina';
    Ranger.addRanger();
  }

  private static addRanger() {
    this._rangerInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType as EnergyType;
  }

  static createdArchetypeInstances(): number {
    return this._rangerInstances;
  }
}

export default Ranger;