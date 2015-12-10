'use strict';
import Preload from './classes/states/Preload';
import Intro from './classes/states/Intro';
import Play from './classes/states/Play';
import Landing from './classes/states/Landing';

let game;

const init = () => {
  game = new Phaser.Game(700, 700, Phaser.AUTO);
  game.state.add('Preload', Preload, false);
  game.state.add('Intro', Intro, false);
  game.state.add('Play', Play, false);
  game.state.add('Landing', Landing, false);
  game.state.start('Preload');
};

init();

