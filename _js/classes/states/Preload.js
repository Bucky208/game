export default class Preload extends Phaser.State {
  preload() {

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    this.load.image('raket', 'assets/raketklein.png');
    this.load.image('meteoor', 'assets/meteoor.png');
    this.load.image('planeet', 'assets/planeet.png');
    this.load.image('background', 'assets/bg.png');

    this.load.audio('rocket_launch', 'assets/sounds/launch.mp3');
  }
  create() {
  }
  update() {
  }
  onLoadComplete() {
    this.game.state.start('Intro');
  }
}
