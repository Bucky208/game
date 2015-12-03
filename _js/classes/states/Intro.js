import Background from '../objects/Background';
import Rocket from '../objects/Rocket';
import Space from '../objects/Space';

let timer = 3,
    countDownText, timerEvent, countdown;

export default class Intro extends Phaser.State {

    create() {



        this.bg = new Background(this.game, 0, 0, 700, 700);
        this.game.add.existing(this.bg);

        this.space = new Space(this.game, 0, 0, 700, 700);
        this.game.add.existing(this.space);

        this.rocket = new Rocket(this.game, 350, 600);
        this.game.add.existing(this.rocket);

        this.startButton = this.game.add.button(350, 500, 'start', this.goClick, this);
        this.startButton.anchor.setTo(0.5, 0.5);

        // let timer = this.game.time.create();
        // this.timerEvent = timer.add(Phaser.Timer.SECOND * 3, this.endTimer, this);
        // timer.start();

        //  countDownText.x = (this.game.width/2)-(this.text.width/2);
    }

    goClick() {

        this.startButton.destroy();


        let countdown = this.game.add.audio('countdown');
        countdown.onStop.add(this.soundStopped, this);
        countdown.play();
        timerEvent = this.time.events.loop(Phaser.Timer.SECOND, this.updateTimer, this);
        countDownText = this.add.text(0, 100, timer, {
            font: '65px Helvetica',
            fill: '#DF882C',
            align: 'center'
        });
        countDownText.scale.pageAlignHorizontally = true;
        countDownText.anchor.setTo(0.5, 0);
        countDownText.x = this.game.width/2;

        this.game.add.tween(countDownText).to( { y: 245 }, 2400, Phaser.Easing.Bounce.Out, true);
    }

    updateTimer() {
        timer -= 1;
        if (timer === 0) {
            countDownText.setText('GO');
            this.game.add.tween(countDownText).to( { alpha: 0 }, 2000, "Linear", true);
        } else {
            countDownText.setText(timer);
        }
        if (timer < 0) {

      this.game.time.events.remove(timerEvent);
            this.game.state.start('Play');


        }
    }

    soundStopped(sound) {


    }

}
