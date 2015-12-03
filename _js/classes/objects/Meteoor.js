export default class Meteoor extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'meteoor', frame);

    this.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enableBody(this);

    this.body.allowGravity = false;
    this.body.immovable = true;

    this.body.velocity.y= 140;

  }
}
