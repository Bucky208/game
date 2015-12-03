import Background from '../objects/Background';
import Rocket from '../objects/Rocket';
import Space from '../objects/Space';

export default class Intro extends Phaser.State {
  create() {
    this.bg = new Background(this.game, 0, 0, 700, 700);
    this.game.add.existing(this.bg);

    this.space = new Space(this.game, 0, 0, 700, 700);
    this.game.add.existing(this.space);

    this.rocket = new Rocket(this.game, 350, 600);
    this.game.add.existing(this.rocket);

    this.startButton = this.game.add.button(350, 500, 'start', this.goClick, this);
    this.startButton.anchor.setTo(0.5,0.5);
  }
  goClick() {
    this.game.state.start('Play');
  }
}
