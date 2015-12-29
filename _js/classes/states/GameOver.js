import Background from '../objects/Background';

export default class GameOver extends Phaser.State {
  create() {
    this.bg = new Background(this.game, 0, 0, 700, 700);
    this.game.add.existing(this.bg);
    let saveScore = {
      time: 5,
      name: 'tempName'
    };
    localStorage.setItem('save', JSON.stringify(saveScore));
    this.deadButton = this.game.add.button(350, 500, 'gameover', this.restart, this);
    this.deadButton.anchor.setTo(0.5, 0.5);
  }

  restart() {
    this.game.state.start('Play', true, false);
  }
}
