export default class Rocket extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'raket', frame);

    this.anchor.setTo(0.5, 0.5);

    this.game.physics.arcade.enableBody(this);
  }
}
