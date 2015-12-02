import Rocket from '../objects/Rocket';
import Space from '../objects/Space';

export default class Intro extends Phaser.State {
  create() {
    this.space = new Space(this.game, 0, 0, 700, 700);
    this.game.add.existing(this.space);

    this.rocket = new Rocket(this.game, 350, 600);
    this.game.add.existing(this.rocket);

  }
}
