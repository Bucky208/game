export default class Preload extends Phaser.State {
  preload() {

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    this.load.image('track', 'assets/track.gif');
    this.load.spritesheet('player_straight', 'assets/road_fighter.png', 11, 16, 3);
    this.load.spritesheet('fuel_label', 'assets/fuel.png', 33, 8, 1);
    this.load.spritesheet('go_label', 'assets/go.png', 48, 16, 3);
    this.load.spritesheet('light_label', 'assets/light.png', 10, 7, 3);


    this.load.bitmapFont('roadfont', 'assets/road_fighter_font.png', 'assets/road_fighter_font.fnt');

    this.load.audio('bonus_car_taken', 'assets/sounds/bonus_car_taken.wav');
    this.load.audio('car_destroy', 'assets/sounds/car_destroy.wav');
    this.load.audio('countdown', 'assets/sounds/countdown.wav');
    this.load.audio('engine', 'assets/sounds/engine.wav');
    this.load.audio('finish', 'assets/sounds/finish.wav');
    this.load.audio('fuel_low', 'assets/sounds/fuel_low.wav');
    this.load.audio('gameover', 'assets/sounds/gameover.wav');
    this.load.audio('go', 'assets/sounds/go.wav');
    this.load.audio('intro', 'assets/sounds/intro.wav');
  }
  create() {
  }
  update() {
  }
  onLoadComplete() {
    this.game.state.start('Intro');
  }
}
