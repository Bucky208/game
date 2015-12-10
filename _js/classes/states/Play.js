import Background from '../objects/Background';
import Space from '../objects/Space';
import Meteoor from '../objects/Meteoor';

let dead = false, bg = true, planeet = false;
let bank,
    bullets,
    fire,
    limitFire = 0;

export default class Play extends Phaser.State {
  create() {
    this.bg = new Background(this.game, 0, 0, 700, 700);
    this.game.add.existing(this.bg);

    this.rocketSound = this.game.add.audio('rocket_launch');
    this.rocketSound.play();

    this.space = new Space(this.game, 0, 0, 700, 700);
    this.game.add.existing(this.space);
    //this.space.autoScroll(0,200);

    this.rocket = this.game.add.sprite(350, 600, 'raket');
    this.rocket.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enableBody(this.rocket);

    this.meteoorGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1, this.generateMeteoor, this);
    this.meteoorGenerator.timer.start();

    this.game.time.events.add(Phaser.Timer.SECOND * 10, this.showPlaneet, this);

    this.currentmeteoor = 0;
    this.firstrun = true;

    this.cursors = this.game.input.keyboard.createCursorKeys();

    // schieten

        bullets = this.game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(30, 'bullet');
        bullets.setAll('anchor.x', 0.5);
        bullets.setAll('anchor.y', 1);
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('checkWorldBounds', true);
  }

  showPlaneet() {
    this.planeet = this.game.add.sprite(350, 1000, 'planeet');
    this.platform = this.game.add.sprite(350, 900, 'platform');

    this.planeet.anchor.setTo(0.5, 0.5);
    this.platform.anchor.setTo(0.5, 0.5);

    this.game.physics.arcade.enableBody(this.platform);

    this.platform.body.moves = false;

    this.rocket.bringToTop();

    this.space.body.x = 0;
    this.space.body.y = -700;
    this.space.revive();

    this.game.add.tween(this.space).to({x: 0, y: 0}, 1000, Phaser.Easing.Quadratic.InOut, true);
    this.game.add.tween(this.planeet).to({x: 350, y: 400}, 1000, Phaser.Easing.Quadratic.InOut, true);
    this.game.add.tween(this.platform).to({x: 350, y: 300}, 1000, Phaser.Easing.Quadratic.InOut, true);
    this.game.add.tween(this.rocket).to({x: 350, y: 200}, 1000, Phaser.Easing.Quadratic.InOut, true);
    this.game.add.tween(this.firstmeteoor).to({y: 800}, 800, Phaser.Easing.Quadratic.InOut, true);
    this.game.add.tween(this.secondmeteoor).to({y: 800}, 800, Phaser.Easing.Quadratic.InOut, true);
    this.game.add.tween(this.thirdmeteoor).to({y: 800}, 800, Phaser.Easing.Quadratic.InOut, true);
    this.game.add.tween(this.fourthmeteoor).to({y: 800}, 800, Phaser.Easing.Quadratic.InOut, true);
    this.game.add.tween(this.fivehmeteoor).to({y: 800}, 800, Phaser.Easing.Quadratic.InOut, true);
    this.game.add.tween(this.sixmeteoor).to({y: 800}, 800, Phaser.Easing.Quadratic.InOut, true);

    var knipper = this.platform.animations.add('knipper');
    this.platform.animations.play('knipper', 2, true);

    this.game.physics.arcade.enableBody(this.planeet);

    planeet = true;
    this.game.time.events.add(Phaser.Timer.SECOND * 1, this.landing, this);
  }

  landing () {
    this.game.state.start('Landing');
  }

  deadHandler() {
    this.deadButton = this.game.add.button(350, 500, 'gameover', this.restart, this);
    this.deadButton.anchor.setTo(0.5,0.5);
    dead = true;
  }

  restart() {
    dead = false;
    bg = true;
    planeet = false;
    this.game.state.start('Play');
  }

  update() {

    if(bg) {
      this.space.body.y += 5;
    }

    // links/rechts detectie
    if (this.rocket.body.x < 0 || this.rocket.body.x > 700) {
        this.rocket.body.velocity.x = 0;
        this.deadHandler();
    }

    if(!planeet) {
      this.game.physics.arcade.collide(this.rocket, this.firstmeteoor, this.deadHandler, null, this);
      this.game.physics.arcade.collide(this.rocket, this.secondmeteoor, this.deadHandler, null, this);
      this.game.physics.arcade.collide(this.rocket, this.thirdmeteoor, this.deadHandler, null, this);
      this.game.physics.arcade.collide(this.rocket, this.fourthmeteoor, this.deadHandler, null, this);
      this.game.physics.arcade.collide(this.rocket, this.fivehmeteoor, this.deadHandler, null, this);
      this.game.physics.arcade.collide(this.rocket, this.sixmeteoor, this.deadHandler, null, this);
    }
    if(!dead) {
      this.rocket.frame = 0;
    } else {
      this.rocket.frame = 3;
    }

    if(this.cursors.left.isDown && !dead) {
        this.rocket.body.velocity.x += -10;
        this.rocket.frame = 1;
    }
    if(this.cursors.right.isDown && !dead){
        this.rocket.body.velocity.x += 10;
        this.rocket.frame = 2;
    }
    if(planeet) {
      this.game.physics.arcade.collide(this.rocket, this.platform, this.geland, null, this);

      if(this.cursors.up.isDown && !dead) {
          this.rocket.body.velocity.y += -10;
      }
      if(this.cursors.down.isDown && !dead){
          this.rocket.body.velocity.y += 10;
      }
    }

    // zijwaards roteer effect
    bank = this.rocket.body.velocity.x / 400;
    this.rocket.scale.x = 1 - Math.abs(bank) / 2;
    this.rocket.angle = bank * 5;

    // Fire

    fire = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    if (fire.isDown) {
        this.fireBullet();
    }
  }


    // Schiet bullets af
    fireBullet() {
    if (this.game.time.now > limitFire){
      let bullet = bullets.getFirstExists(false);
      if (bullet){
           let bulletOffset = 20 * Math.sin(this.game.math.degToRad(this.rocket.angle));
           bullet.reset(this.rocket.x + bulletOffset, this.rocket.y - 35);
           bullet.angle = this.rocket.angle;
           this.game.physics.arcade.velocityFromAngle(bullet.angle - 90, 400, bullet.body.velocity);
           bullet.body.velocity.x += this.rocket.body.velocity.x;
           limitFire = this.game.time.now + 150;
        }
     }
    }

    generateMeteoor() {
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
        //destroy space start bg
        this.space.kill();
        bg = false;
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
