import Background from '../objects/Background';
import Rocket from '../objects/Rocket';
import Space from '../objects/Space';
import Meteoor from '../objects/Meteoor';

export default class Play extends Phaser.State {
  create() {
    this.bg = new Background(this.game, 0, 0, 700, 700);
    this.game.add.existing(this.bg);

    this.rocketSound = this.game.add.audio('rocket_launch');
    this.rocketSound.play();

    this.space = new Space(this.game, 0, 0, 700, 700);
    this.game.add.existing(this.space);
    this.space.autoScroll(0,200);

    this.rocket = new Rocket(this.game, 350, 600);
    this.game.add.existing(this.rocket);

    this.meteoorGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1, this.generateMeteoor, this);
    this.meteoorGenerator.timer.start();

    this.currentmeteoor = 0;
    this.firstrun = true;

    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update() {
    this.game.physics.arcade.collide(this.rocket, this.firstmeteoor, this.deadHandler, null, this);
    this.game.physics.arcade.collide(this.rocket, this.secondmeteoor, this.deadHandler, null, this);
    this.game.physics.arcade.collide(this.rocket, this.thirdmeteoor, this.deadHandler, null, this);
    this.game.physics.arcade.collide(this.rocket, this.fourthmeteoor, this.deadHandler, null, this);
    this.game.physics.arcade.collide(this.rocket, this.fivehmeteoor, this.deadHandler, null, this);
    this.game.physics.arcade.collide(this.rocket, this.sixmeteoor, this.deadHandler, null, this);

    if(this.cursors.left.isDown) {
        this.rocket.body.velocity.x += -10;
    }
    if(this.cursors.right.isDown){
        this.rocket.body.velocity.x += 10;
    }
  }

  deadHandler() {
    this.gameoverButton = this.game.add.button(350, 500, 'gameover', this.goClick, this);
    this.gameoverButton.anchor.setTo(0.5,0.5);
  }

  generateMeteoor() {
    this.space.destroy();

    this.meteoorY = this.game.rnd.integerInRange(0, 700);
    if(this.firstrun) {
      if(this.currentmeteoor == 0) {
        this.firstmeteoor = new Meteoor(this.game, this.meteoorY, -10, this.color);
        this.game.add.existing(this.firstmeteoor);
      } else if(this.currentmeteoor == 1) {
        this.secondmeteoor = new Meteoor(this.game, this.meteoorY, -10, this.color);
        this.game.add.existing(this.secondmeteoor);
      } else if(this.currentmeteoor == 2) {
        this.thirdmeteoor = new Meteoor(this.game, this.meteoorY, -10, this.color);
        this.game.add.existing(this.thirdmeteoor);
      } else if(this.currentmeteoor == 3) {
        this.fourthmeteoor = new Meteoor(this.game, this.meteoorY, -10, this.color);
        this.game.add.existing(this.fourthmeteoor);
      } else if(this.currentmeteoor == 4) {
        this.fivehmeteoor = new Meteoor(this.game, this.meteoorY, -10, this.color);
        this.game.add.existing(this.fivehmeteoor);
      } else if(this.currentmeteoor == 5) {
        this.sixmeteoor = new Meteoor(this.game, this.meteoorY, -10, this.color);
        this.game.add.existing(this.sixmeteoor);
        this.firstrun = false;
        this.currentmeteoor = -1;
      }
    }
    if(this.currentmeteoor == 0) {
        this.firstmeteoor.y = -10;
      } else if(this.currentmeteoor == 1) {
        this.secondmeteoor.y = -10;
      } else if(this.currentmeteoor == 2) {
        this.thirdmeteoor.y = -10;
      } else if(this.currentmeteoor == 3) {
        this.fourthmeteoor.y = -10;
      } else if(this.currentmeteoor == 4) {
        this.fivehmeteoor.y = -10;
      } else if(this.currentmeteoor == 5) {
        this.sixmeteoor.y = -10;
        this.currentmeteoor = -1;
      }
      this.currentmeteoor++;
  }
}
