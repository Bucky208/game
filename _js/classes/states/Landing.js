import Background from '../objects/Background';
import Space from '../objects/Space';

let dead = false,
  geland = false;

export default class Landing extends Phaser.State {

  create() {
    //Zelfde als play.....
    this.bg = new Background(this.game, 0, 0, 700, 700);
    this.game.add.existing(this.bg);
    this.space = new Space(this.game, 0, 0, 700, 700);
    this.game.add.existing(this.space);
    //this.space.autoScroll(0,200);
    this.rocket = this.game.add.sprite(350, 200, 'raketlanden');
    this.rocket.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enableBody(this.rocket);
    this.showPlaneet();
    //planeet modus ^
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  showPlaneet() {
    //planeet & platform
    this.planeet = this.game.add.sprite(350, 400, 'planeet');
    this.platform = this.game.add.sprite(350, 300, 'platform');
    //uitlijnen
    this.planeet.anchor.setTo(0.5, 0.5);
    this.platform.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enableBody(this.platform);
    //platform blijft staan
    this.platform.body.moves = false;
    //front
    this.rocket.bringToTop();
    //animatie
    this.platform.animations.add('knipper');
    this.platform.animations.play('knipper', 2, true);
    this.game.physics.arcade.enableBody(this.planeet);
  }

  geland() {
    //yay we staan safe
    this.rocket.body.moves = false;
    geland = true;
    this.game.time.events.add(Phaser.Timer.SECOND * 1, this.nextUpdate, this);
  }

  nextUpdate() {
    this.game.speed += 50;
    console.log(this.game.speed);
    this.game.state.start('Upgrade');
  }

  update() {
    //frame bepalen
    if (geland) {
      this.rocket.frame = 1;
    } else {
      this.rocket.frame = 0;
    }
    this.game.physics.arcade.collide(this.rocket, this.platform, this.geland, null, this);
    //movement
    if (this.cursors.left.isDown) {
      this.rocket.body.velocity.x += -10;
      this.rocket.frame = 2;
    }
    if (this.cursors.right.isDown) {
      this.rocket.body.velocity.x += 10;
      this.rocket.frame = 3;
    }
    if (this.cursors.up.isDown && !dead) {
      this.rocket.body.velocity.y += -10;
      this.rocket.frame = 5;
    }
    if (this.cursors.down.isDown && !dead) {
      this.rocket.body.velocity.y += 10;
      this.rocket.frame = 4;
    }
  }
}
