import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name;
  private _special;
  private _cost;

  constructor(
    name: string,
  ) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;
