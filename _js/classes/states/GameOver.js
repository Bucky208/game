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

    this.post();
    this.loadItems();
  }

  loadItems() {
    let req = new XMLHttpRequest();
    req.responseType = 'json';
    req.onload = () => {
      if(!req.response || req.response.length === 0) {
       console.log("No Items In Database");
        return;
      }
      req.response.forEach(item => {
        console.log(`id: ${item.id} - name: ${item.name} - score: ${item.score}`);
      });
    };
    let url = `index.php?t=${Date.now()}`;
    req.open('get', url, true);
    req.setRequestHeader('X_REQUESTED_WITH', 'xmlhttprequest');
    req.send();
  }

  restart() {
    this.game.state.start('Play', true, false);
  }

  post() {
    let req = new XMLHttpRequest();
    req.responseType = 'json';
    let url = `index.php?t=${Date.now()}`;
    req.open('post', url, true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.send(`name=Bucky208&score=${this.game.score}`);
  }
}
