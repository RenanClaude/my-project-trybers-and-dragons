import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _mana: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._mana = 'mana';
    Mage.addInstance();
  }

  get energyType(): EnergyType {
    return this._mana;
  }

  private static addInstance() {
    this._createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdInstances;
  }
}