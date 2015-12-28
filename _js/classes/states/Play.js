import Background from '../objects/Background';
import Space from '../objects/Space';
import Meteoor from '../objects/Meteoor';
import Fuel from '../objects/Fuel';

let dead = false,
    bg = true,
    planeet = false,
    fueltext, strfuel, fuel, style;
let bank,
    bullets,
    bullet,
    meteos,
    fire,
    limitFire = 0,
    fuelamount,
    lives;
let fuelLevel, rockets;


export default class Play extends Phaser.State {
    create() {
        // lives
        lives = 3;

        //achtergrond
        this.bg = new Background(this.game, 0, 0, 700, 700);
        this.game.add.existing(this.bg);

        //raketvertrekt geluid
        this.rocketSound = this.game.add.audio('rocket_launch');
        this.rocketSound.play();

        //space elementen
        this.space = new Space(this.game, 0, 0, 700, 700);
        this.game.add.existing(this.space);
        //this.space.autoScroll(0,200);

        //fuel
        fuelamount = 100;

        //de raket
        if (this.game.boosts) {
            this.rocket = this.game.add.sprite(350, 600, 'raketboosted');
            fuelamount = 150;
        } else {
            this.rocket = this.game.add.sprite(350, 600, 'raket');
        }
        this.rocket.anchor.setTo(0.5, 0.5);
        this.game.physics.arcade.enableBody(this.rocket);

        //meteoren
        meteos = this.game.add.group();
        meteos.enableBody = true;
        meteos.physicsBodyType = Phaser.Physics.ARCADE;

        //meteoren op het scherm plaatsen > itemer
        //this.meteoorGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1, this.generateMeteoor, this);
        //this.meteoorGenerator.timer.start();

        //voltooien van de basics
        this.game.time.events.add(Phaser.Timer.SECOND * 20, this.showPlaneet, this);

        //parameters
        this.currentmeteoor = 0;
        this.firstrun = true;

        //controls
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

        //fuel
        strfuel = "Fuel: ";
        fueltext = strfuel + fuelamount;
        style = {
            font: '20px Helvetica',
            fill: '#FFFFFF',
            align: 'center'
        };
        fuel = this.game.add.text(610, 5, fueltext, style);

        rockets = this.game.add.group();
    }

    goodbye(obj) {
       obj.destroy();
       this.spawnMetoor();
    }

    spawnMetoor() {
      var c = meteos.create(this.game.world.randomX, -10, 'meteoor', this.game.rnd.integerInRange(0, 36));
      //c.name = 'meteoor' + i;
      c.body.immovable = true;
      c.body.velocity.y= this.game.speed;
      c.events.onOutOfBounds.add( this.goodbye, this );
      c.checkWorldBounds = true;
    }

    showPlaneet() {

        //als de user dood is doe niets extra meer
        if (!dead) {
            //planeet onder scherm plaatsen
            this.planeet = this.game.add.sprite(350, 1000, 'planeet');
            //platform onder scherm plaatsen
            this.platform = this.game.add.sprite(350, 900, 'platform');

            //uitlijnen
            this.planeet.anchor.setTo(0.5, 0.5);
            this.platform.anchor.setTo(0.5, 0.5);

            //movements
            this.game.physics.arcade.enableBody(this.platform);
            this.platform.body.moves = false;

            //ontop
            this.rocket.bringToTop();

            //space elementen plaats herinstellen
            this.space.body.x = 0;
            this.space.body.y = -700;
            this.space.revive();

            //animaties
            this.game.add.tween(this.space).to({
                x: 0,
                y: 0
            }, 1000, Phaser.Easing.Quadratic.InOut, true);
            this.game.add.tween(this.planeet).to({
                x: 350,
                y: 400
            }, 1000, Phaser.Easing.Quadratic.InOut, true);
            this.game.add.tween(this.platform).to({
                x: 350,
                y: 300
            }, 1000, Phaser.Easing.Quadratic.InOut, true);
            this.game.add.tween(this.rocket).to({
                x: 350,
                y: 200
            }, 1000, Phaser.Easing.Quadratic.InOut, true);
            this.game.add.tween(this.firstmeteoor).to({
                y: 800
            }, 800, Phaser.Easing.Quadratic.InOut, true);
            this.game.add.tween(this.secondmeteoor).to({
                y: 800
            }, 800, Phaser.Easing.Quadratic.InOut, true);
            this.game.add.tween(this.thirdmeteoor).to({
                y: 800
            }, 800, Phaser.Easing.Quadratic.InOut, true);
            this.game.add.tween(this.fuel).to({
                y: 800
            }, 800, Phaser.Easing.Quadratic.InOut, true);
            this.game.add.tween(this.fourthmeteoor).to({
                y: 800
            }, 800, Phaser.Easing.Quadratic.InOut, true);
            this.game.add.tween(this.fivehmeteoor).to({
                y: 800
            }, 800, Phaser.Easing.Quadratic.InOut, true);
            this.game.add.tween(this.sixmeteoor).to({
                y: 800
            }, 800, Phaser.Easing.Quadratic.InOut, true);

            //platform animatie loop
            let knipper = this.platform.animations.add('knipper');
            this.platform.animations.play('knipper', 2, true);

            //movement
            this.game.physics.arcade.enableBody(this.planeet);

            //event binnen 1 sec
            planeet = true;
            this.game.time.events.add(Phaser.Timer.SECOND * 1, this.landing, this);



        }
    }

    landing() {
        planeet = false;
        dead = false;
        bg = true;
        //we gaan naar de planeet modus
        this.game.state.start('Landing');
    }

    deadHandler(a, b) {
        //oeps je bent DOOD, show Gameover
        if(b === undefined) {
        return false;
        } else {
        b.destroy();
        }
        if(lives === 1) {
                  dead = true;
                  this.restart();
                  this.game.state.start('GameOver');
      } else {

        this.game.add.tween(this.bg).to({tint: 0xffffff,}, 100, Phaser.Easing.Exponential.Out, true, 0, 0, true);

        lives--;
        rockets.destroy();
        rockets = this.game.add.group();

      }
    }

    restart() {
        //herstarten en herinstellen
        dead = false;
        bg = true;
        planeet = false;
        this.game.state.start('Play');
    }


    // Render FuelBar
    fuelBar(fuelamount) {
        //fuelamount
        fuelLevel = new Phaser.Rectangle(0, 0, fuelamount*5, 5);
        this.game.debug.geom(fuelLevel, '#00751F');
    }

    update() {

        //fix
        this.rocket.body.y = 600;

        //fuel verminderen
        fuelamount -= 0.08;
        fueltext = strfuel + fuelamount;
        fuel.setText(fueltext);
        if (fuelamount < 0) {
            this.deadHandler();
        }

        //achtergrond weg doen bij het starten
        if (bg) {
            this.space.body.y += 5;
        }

        // links/rechts detectie
        if (this.rocket.body.x < 0 || this.rocket.body.x > 700) {
            this.rocket.body.velocity.x = 0;
            this.deadHandler();
        }

        //collisions
        if (!planeet) {
            this.game.physics.arcade.collide(this.rocket, this.firstmeteoor, this.deadHandler, null, this);
            this.game.physics.arcade.collide(this.rocket, this.secondmeteoor, this.deadHandler, null, this);
            this.game.physics.arcade.collide(this.rocket, this.thirdmeteoor, this.deadHandler, null, this);
            this.game.physics.arcade.collide(this.rocket, this.fourthmeteoor, this.deadHandler, null, this);
            this.game.physics.arcade.collide(this.rocket, this.fivehmeteoor, this.deadHandler, null, this);
            this.game.physics.arcade.collide(this.rocket, this.sixmeteoor, this.deadHandler, null, this);
            this.game.physics.arcade.collide(this.rocket, this.fuel, this.fuelHandler, null, this);
        }

        //sprite frame raket
        if (!dead) {
            this.rocket.frame = 0;
        } else {
            this.rocket.frame = 3;
        }

        //movement
        if (this.cursors.left.isDown && !dead) {
            if (this.game.boosts) {
                this.rocket.body.velocity.x += -7;
            } else {
                this.rocket.body.velocity.x += -10;
            }
            this.rocket.frame = 1;
        }
        if (this.cursors.right.isDown && !dead) {
            if (this.game.boosts) {
                this.rocket.body.velocity.x += 7;
            } else {
                this.rocket.body.velocity.x += 10;
            }
            this.rocket.frame = 2;
        }

        if (planeet) {
            //landen op platform
            this.game.physics.arcade.collide(this.rocket, this.platform, this.geland, null, this);

            if (this.cursors.up.isDown && !dead) {
                this.rocket.body.velocity.y += -10;
            }
            if (this.cursors.down.isDown && !dead) {
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

        // check for impact
        this.game.physics.arcade.overlap(bullets, meteos, this.collisionHandler, null, this);

        // load fuel
        this.fuelBar(fuelamount);

        // show aantal levens
        for(var i = 0; i < lives; i++) {
          rockets.add(this.game.add.sprite(25*i, 20, 'raket'));
        }

        rockets.scale.set(0.5,0.5);
    }

    collisionHandler (bullet, met) {

        bullet.kill();
        met.destroy();
        this.spawnMetoor();
    }

   hitEnemy(enemy, bullet) {
      enemy.revive();
      bullet.kill();
      this.generateMeteoor();
  }

    // Schiet bullets af
    fireBullet() {
        if (this.game.time.now > limitFire) {
            let bullet = bullets.getFirstExists(false);
            if (bullet) {
                let bulletOffset = 20 * Math.sin(this.game.math.degToRad(this.rocket.angle));
                bullet.reset(this.rocket.x + bulletOffset, this.rocket.y - 35);
                bullet.angle = this.rocket.angle;
                this.game.physics.arcade.velocityFromAngle(bullet.angle - 90, 400, bullet.body.velocity);
                bullet.body.velocity.x += this.rocket.body.velocity.x;
                limitFire = this.game.time.now + 150;
            }
        }
    }

    //bolletjes genereren
    //first run maakt ze
    //erna worden ze van onder het scherm terug naar bovenaan geplaatst
    generateMeteoor() {
        this.meteoorY = this.game.rnd.integerInRange(0, 700);
        if (this.firstrun) {
            if (this.currentmeteoor == 0) {
                this.firstmeteoor = new Meteoor(this.game, this.meteoorY, -10, this.color);
                this.game.add.existing(this.firstmeteoor);
            } else if (this.currentmeteoor == 1) {
                this.secondmeteoor = new Meteoor(this.game, this.meteoorY, -10, this.color);
                this.game.add.existing(this.secondmeteoor);
            } else if (this.currentmeteoor == 2) {
                this.thirdmeteoor = new Meteoor(this.game, this.meteoorY, -10, this.color);
                this.game.add.existing(this.thirdmeteoor);
            } else if (this.currentmeteoor == 3) {
                this.fourthmeteoor = new Meteoor(this.game, this.meteoorY, -10, this.color);
                this.game.add.existing(this.fourthmeteoor);
                //destroy space start bg
                this.space.kill();
                bg = false;
            } else if (this.currentmeteoor == 4) {
                this.fivehmeteoor = new Meteoor(this.game, this.meteoorY, -10, this.color);
                this.game.add.existing(this.fivehmeteoor);
                this.gimmeFuel();
            } else if (this.currentmeteoor == 5) {
                this.sixmeteoor = new Meteoor(this.game, this.meteoorY, -10, this.color);
                this.game.add.existing(this.sixmeteoor);
                this.firstrun = false;
                this.currentmeteoor = -1;
            }
        }
        if (this.currentmeteoor == 0) {
            this.firstmeteoor.y = -10;
        } else if (this.currentmeteoor == 1) {
            this.secondmeteoor.y = -10;
        } else if (this.currentmeteoor == 2) {
            this.thirdmeteoor.y = -10;
        } else if (this.currentmeteoor == 3) {
            this.fourthmeteoor.y = -10;
        } else if (this.currentmeteoor == 4) {
            this.fivehmeteoor.y = -10;
            if (!this.firstrun) {
                this.gimmeFuel();
            }
        } else if (this.currentmeteoor == 5) {
            this.sixmeteoor.y = -10;
            this.currentmeteoor = -1;
        }
        this.currentmeteoor++;


    }

    gimmeFuel() {
        this.fuelY = this.game.rnd.integerInRange(0, 700);
        this.fuel = new Fuel(this.game, this.fuelY, -10);
        this.game.add.existing(this.fuel);
    }

    fuelHandler() {
        this.rocket.body.velocity.x = 0;
        this.fuel.destroy();
        fuelamount += 30;
    }
}
