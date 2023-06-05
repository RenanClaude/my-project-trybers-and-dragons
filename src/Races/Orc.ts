import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.addInstance();
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static addInstance() {
    this._createdInstances += 1;
  }

  public static createdRacesInstances(): number {
    return this._createdInstances;
  }
}