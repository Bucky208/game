import Preload from './classes/states/Preload';
import Intro from './classes/states/Intro';

let game;

const init = () => {
  game = new Phaser.Game(700, 700, Phaser.AUTO);
  game.state.add('Preload', Preload, false);
  game.state.add('Intro', Intro, false);
  game.state.start('Preload');
};

init();
