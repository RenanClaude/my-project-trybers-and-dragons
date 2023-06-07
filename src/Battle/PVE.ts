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
    this._monsters.map((monster) => {
      while (this._player.lifePoints > 0 && monster.lifePoints > 0) {
        this._player.attack(monster);
        monster.attack(this._player);
      }
      
      if (this._player.lifePoints > monster.lifePoints) {
        return 1;
      } return -1; 
    });

    return super.fight();
  }

  // override fight(): number {
  //   for (let index = 0; index < this._monsters.length; index += 1) {
  //     while (this._player.lifePoints > 0 
  //       && this._monsters[index].lifePoints > 0) {
  //       this._player.attack(this._monsters[index]);
  //       this._monster[index].attack(this._player);
  //     }
  //   }
  // }
}