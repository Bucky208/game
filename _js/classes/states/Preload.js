export default class Preload extends Phaser.State {
  preload() {

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    //alle assets preloaden
    //images
    this.load.image('start', 'assets/start.png');
    this.load.image('meteoor', 'assets/meteoorklein.png');
    this.load.image('background_overlay', 'assets/bgoverlay.png');
    this.load.image('background', 'assets/bg.png');
    this.load.image('gameover', 'assets/gameover.png');
    this.load.image('bullet', 'assets/bullet.png');
    this.load.image('update', 'assets/update.png');
    this.load.image('noupdate', 'assets/noupdate.png');

    //spritesheets
    this.load.spritesheet('planeet', 'assets/planeet.png', 545, 386, 1);

    this.load.spritesheet('raket', 'assets/raketkleinsprite.png', 31, 80);
    this.load.spritesheet('raketlanden', 'assets/raketklein_landen.png', 31, 51);
    this.load.spritesheet('raketboosted', 'assets/raketklein_boost.png', 31, 80);

    this.load.spritesheet('platform', 'assets/platform.png', 50, 8);

    //audio
    this.load.audio('rocket_launch', 'assets/sounds/launch.mp3');
    this.load.audio('countdown', 'assets/sounds/countdown.mp3');

    //vars
    this.game.boosts = false;
  }
  create() {
  }
  update() {
  }
  onLoadComplete() {
    this.game.state.start('Intro');
  }
}
