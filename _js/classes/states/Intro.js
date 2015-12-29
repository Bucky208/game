import Background from '../objects/Background';
import Rocket from '../objects/Rocket';
import Space from '../objects/Space';
import Uitleg from '../objects/Uitleg';

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
    //toon uitleg
    this.uitleg = new Uitleg(this.game, 350, 250, 400, 400, 'intro');
    this.game.add.existing(this.uitleg);
    //toon startknop
    this.startButton = this.game.add.button(350, 500, 'ok', this.goClick, this);
    this.startButton.anchor.setTo(0.5, 0.5);
    //bgsound geluid
    this.bgSound = this.game.add.audio('bgsound');
    //this.bgSound.play();
    this.bgSound.play('', 0, 1, true);
    this.bgSound.onLoop.add(this.playbgSound, this);
  }

  playbgSound() {
    this.bgSound.play('', 0, 1, true);
  }

  //geduwt op startknop
  goClick() {
    this.game.state.start('Intro2');
  }
}
