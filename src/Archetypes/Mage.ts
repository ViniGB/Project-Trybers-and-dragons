import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType;
  private static _mageInstances = 0;

  constructor(
    name: string,
  ) { 
    super(name);
    this._energyType = 'mana';
    Mage.addMage();
  }

  private static addMage() {
    this._mageInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType as EnergyType;
  }

  static createdArchetypeInstances(): number {
    return this._mageInstances;
  }
}

export default Mage;