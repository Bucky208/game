import Background from '../objects/Background';
import Rocket from '../objects/Rocket';
import Space from '../objects/Space';

let timer = 3,
  countDownText, timerEvent;

export default class Countdown extends Phaser.State {
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
    //toon startknop
    this.startButton = this.game.add.button(350, 500, 'start', this.goClick, this);
    this.startButton.anchor.setTo(0.5, 0.5);
  }

  //geduwt op startknop
  goClick() {
    timer = 3;
    //verwijder startknop
    this.startButton.destroy();
    //countdown om te starten
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
    countDownText.x = this.game.width / 2;
    //countdown animatie
    this.game.add.tween(countDownText).to({
      y: 245
    }, 2400, Phaser.Easing.Bounce.Out, true);
  }

  //tekst bepalen van de timer
  updateTimer() {
    timer -= 1;
    if (timer === 0) {
      countDownText.setText('GO');
      this.game.add.tween(countDownText).to({
        alpha: 0
      }, 2000, 'Linear', true);
    } else {
      countDownText.setText(timer);
    }
    if (timer < 0) {
      this.game.time.events.remove(timerEvent);
      this.game.state.start('Play');
    }
  }

  soundStopped() {
    //geen uitvoer
  }
}
