import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _stamina: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._stamina = 'stamina';
    Warrior.addInstance();
  }

  get energyType(): EnergyType {
    return this._stamina;
  }

  private static addInstance() {
    this._createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdInstances;
  }
}