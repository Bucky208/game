import Background from '../objects/Background';
import Rocket from '../objects/Rocket';
import Space from '../objects/Space';

export default class Intro extends Phaser.State {
  create() {
    //toon bg
    this.bg = new Background(this.game, 0, 0, 700, 700);
    this.game.add.existing(this.bg);
    //toon bg planeten
    this.space = new Space(this.game, 0, 0, 700, 700);
    this.game.add.existing(this.space);
    //toon raket
    this.rocket = new Rocket(this.game, 350, 600);
    this.game.add.existing(this.rocket);
    //toon upgrade
    this.upgradeButton = this.game.add.button(233, 350, 'noupdate', this.startknop, this);
    this.upgradeButton.anchor.setTo(0.5, 0.5);
    //toon upgrade
    this.noupgradeButton = this.game.add.button(466, 350, 'update', this.updateRocket, this);
    this.noupgradeButton.anchor.setTo(0.5, 0.5);
  }

  updateRocket() {
    this.upgradeButton.destroy();
    this.noupgradeButton.destroy();
    this.rocket.destroy();
    this.game.boosts = true;
    this.game.state.start('Countdown');
  }

  startknop() {
    this.game.state.start('Countdown');
  }
}
