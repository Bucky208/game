'use strict';
import Preload from './classes/states/Preload';
import Intro from './classes/states/Intro';
import Intro2 from './classes/states/Intro2';
import Play from './classes/states/Play';
import Landing from './classes/states/Landing';
import Countdown from './classes/states/Countdown';
import Upgrade from './classes/states/Upgrade';

let game;

const init = () => {
  game = new Phaser.Game(700, 700, Phaser.AUTO);
  game.state.add('Preload', Preload, false);
  game.state.add('Intro', Intro, false);
  game.state.add('Intro2', Intro2, false);
  game.state.add('Play', Play, false);
  game.state.add('Landing', Landing, false);
  game.state.add('Upgrade', Upgrade, false);
  game.state.add('Countdown', Countdown, false);
  game.state.start('Preload');
  game.speed = 140;
};

init();

