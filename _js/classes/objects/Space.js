export default class Space extends Phaser.TileSprite {
  constructor(game, x, y, width, height) {
    super(game, x, y, width, height, 'background_overlay');
    this.game.physics.arcade.enableBody(this);

    this.body.allowGravity = false;
    this.body.immovable = true;
  }
}
