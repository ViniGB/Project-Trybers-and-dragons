import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType;
  private static _warriorInstances = 0;

  constructor(
    name: string,
  ) { 
    super(name);
    this._energyType = 'stamina';
    Warrior.addWarrior();
  }

  private static addWarrior() {
    this._warriorInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType as EnergyType;
  }

  static createdArchetypeInstances(): number {
    return this._warriorInstances;
  }
}

export default Warrior;