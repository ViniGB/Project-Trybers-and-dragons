import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType;
  private static _necromancerInstances = 0;

  constructor(
    name: string,
  ) { 
    super(name);
    this._energyType = 'mana';
    Necromancer.addNecromancer();
  }

  private static addNecromancer() {
    this._necromancerInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType as EnergyType;
  }

  static createdArchetypeInstances(): number {
    return this._necromancerInstances;
  }
}

export default Necromancer;