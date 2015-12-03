import Background from '../objects/Background';
import Rocket from '../objects/Rocket';
import Space from '../objects/Space';

export default class Play extends Phaser.State {
  create() {
    this.bg = new Background(this.game, 0, 0, 700, 700);
    this.game.add.existing(this.bg);

    this.space = new Space(this.game, 0, 0, 700, 700);
    this.game.add.existing(this.space);
    this.space.autoScroll(0,200);

    this.rocket = new Rocket(this.game, 350, 600);
    this.game.add.existing(this.rocket);


    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update() {
    if(this.cursors.left.isDown) {
        this.rocket.body.velocity.x += -10;
    }
    if(this.cursors.right.isDown){
        this.rocket.body.velocity.x += 10;
    }
  }
}
