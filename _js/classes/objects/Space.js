export default class Track extends Phaser.TileSprite {
  constructor(game, x, y, width, height) {
    super(game, x, y, width, height, 'background');
    this.game.physics.arcade.enableBody(this);

    this.body.allowGravity = false;
    this.body.immovable = true;
  }
}
