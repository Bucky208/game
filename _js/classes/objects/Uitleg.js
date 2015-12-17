export default class Uitleg extends Phaser.TileSprite {
  constructor(game, x, y, width, height, intro) {
    super(game, x, y, width, height, intro);
    this.game.physics.arcade.enableBody(this);
    this.anchor.setTo(0.5, 0.5);
    this.body.allowGravity = false;
    this.body.immovable = true;
  }
}
