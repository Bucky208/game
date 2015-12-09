export default class Preload extends Phaser.State {
  preload() {

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    this.load.image('start', 'assets/start.png');
    this.load.image('meteoor', 'assets/meteoorklein.png');
    this.load.image('planeet', 'assets/planeet.png');
    this.load.image('background_overlay', 'assets/bgoverlay.png');
    this.load.image('background', 'assets/bg.png');
    this.load.image('gameover', 'assets/gameover.png');

    this.load.spritesheet('raket', 'assets/raketkleinsprite.png', 31, 80, 3);

    this.load.audio('rocket_launch', 'assets/sounds/launch.mp3');
    this.load.audio('countdown', 'assets/sounds/countdown.mp3');
  }
  create() {
  }
  update() {
  }
  onLoadComplete() {
    this.game.state.start('Intro');
  }
}
