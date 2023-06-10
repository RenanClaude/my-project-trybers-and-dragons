import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _monsters: Monster[] | SimpleFighter[];

  constructor(player: Fighter, monsters: Monster[] | SimpleFighter[]) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  override fight(): number {
    this._monsters.sort((a, b) => a.lifePoints - b.lifePoints);
    
    this._monsters.forEach((monster) => {
      while (this._player.lifePoints > 0 && monster.lifePoints > 0) {
        this._player.attack(monster);

        this._monsters.forEach((monsterAttack) => {
          monsterAttack.attack(this._player);
        });
      }
    });
    return super.fight();
  }
}