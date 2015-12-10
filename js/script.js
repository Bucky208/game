/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(1);\nmodule.exports = __webpack_require__(9);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _classesStatesPreload = __webpack_require__(2);\n\nvar _classesStatesPreload2 = _interopRequireDefault(_classesStatesPreload);\n\nvar _classesStatesIntro = __webpack_require__(3);\n\nvar _classesStatesIntro2 = _interopRequireDefault(_classesStatesIntro);\n\nvar _classesStatesPlay = __webpack_require__(7);\n\nvar _classesStatesPlay2 = _interopRequireDefault(_classesStatesPlay);\n\nvar _classesStatesLanding = __webpack_require__(11);\n\nvar _classesStatesLanding2 = _interopRequireDefault(_classesStatesLanding);\n\nvar game = undefined;\n\nvar init = function init() {\n  game = new Phaser.Game(700, 700, Phaser.AUTO);\n  game.state.add('Preload', _classesStatesPreload2['default'], false);\n  game.state.add('Intro', _classesStatesIntro2['default'], false);\n  game.state.add('Play', _classesStatesPlay2['default'], false);\n  game.state.add('Landing', _classesStatesLanding2['default'], false);\n  game.state.start('Preload');\n};\n\ninit();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/script.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/script.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Preload = (function (_Phaser$State) {\n  _inherits(Preload, _Phaser$State);\n\n  function Preload() {\n    _classCallCheck(this, Preload);\n\n    _get(Object.getPrototypeOf(Preload.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(Preload, [{\n    key: 'preload',\n    value: function preload() {\n\n      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);\n\n      this.load.image('start', 'assets/start.png');\n      this.load.image('meteoor', 'assets/meteoorklein.png');\n      this.load.image('background_overlay', 'assets/bgoverlay.png');\n      this.load.image('background', 'assets/bg.png');\n      this.load.image('gameover', 'assets/gameover.png');\n\n      this.load.spritesheet('planeet', 'assets/planeet.png', 545, 386, 1);\n\n      this.load.spritesheet('raket', 'assets/raketkleinsprite.png', 31, 80);\n      this.load.spritesheet('raketlanden', 'assets/raketklein_landen.png', 31, 51);\n      this.load.spritesheet('raketboosted', 'assets/raketklein_boost.png', 31, 80);\n\n      this.load.spritesheet('platform', 'assets/platform.png', 50, 8);\n\n      this.load.audio('rocket_launch', 'assets/sounds/launch.mp3');\n      this.load.audio('countdown', 'assets/sounds/countdown.mp3');\n    }\n  }, {\n    key: 'create',\n    value: function create() {}\n  }, {\n    key: 'update',\n    value: function update() {}\n  }, {\n    key: 'onLoadComplete',\n    value: function onLoadComplete() {\n      this.game.state.start('Intro');\n    }\n  }]);\n\n  return Preload;\n})(Phaser.State);\n\nexports['default'] = Preload;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/states/Preload.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/states/Preload.js?");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n    value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _objectsBackground = __webpack_require__(4);\n\nvar _objectsBackground2 = _interopRequireDefault(_objectsBackground);\n\nvar _objectsRocket = __webpack_require__(5);\n\nvar _objectsRocket2 = _interopRequireDefault(_objectsRocket);\n\nvar _objectsSpace = __webpack_require__(6);\n\nvar _objectsSpace2 = _interopRequireDefault(_objectsSpace);\n\nvar timer = 3,\n    countDownText = undefined,\n    timerEvent = undefined,\n    countdown = undefined;\n\nvar Intro = (function (_Phaser$State) {\n    _inherits(Intro, _Phaser$State);\n\n    function Intro() {\n        _classCallCheck(this, Intro);\n\n        _get(Object.getPrototypeOf(Intro.prototype), 'constructor', this).apply(this, arguments);\n    }\n\n    _createClass(Intro, [{\n        key: 'create',\n        value: function create() {\n            this.bg = new _objectsBackground2['default'](this.game, 0, 0, 700, 700);\n            this.game.add.existing(this.bg);\n\n            this.space = new _objectsSpace2['default'](this.game, 0, 0, 700, 700);\n            this.game.add.existing(this.space);\n\n            this.rocket = new _objectsRocket2['default'](this.game, 350, 600);\n            this.game.add.existing(this.rocket);\n\n            this.startButton = this.game.add.button(350, 500, 'start', this.goClick, this);\n            this.startButton.anchor.setTo(0.5, 0.5);\n        }\n    }, {\n        key: 'goClick',\n        value: function goClick() {\n\n            this.startButton.destroy();\n\n            var countdown = this.game.add.audio('countdown');\n            countdown.onStop.add(this.soundStopped, this);\n            countdown.play();\n            timerEvent = this.time.events.loop(Phaser.Timer.SECOND, this.updateTimer, this);\n            countDownText = this.add.text(0, 100, timer, {\n                font: '65px Helvetica',\n                fill: '#DF882C',\n                align: 'center'\n            });\n            countDownText.scale.pageAlignHorizontally = true;\n            countDownText.anchor.setTo(0.5, 0);\n            countDownText.x = this.game.width / 2;\n\n            this.game.add.tween(countDownText).to({ y: 245 }, 2400, Phaser.Easing.Bounce.Out, true);\n        }\n    }, {\n        key: 'updateTimer',\n        value: function updateTimer() {\n            timer -= 1;\n            if (timer === 0) {\n                countDownText.setText('GO');\n                this.game.add.tween(countDownText).to({ alpha: 0 }, 2000, \"Linear\", true);\n            } else {\n                countDownText.setText(timer);\n            }\n            if (timer < 0) {\n\n                this.game.time.events.remove(timerEvent);\n                this.game.state.start('Play');\n            }\n        }\n    }, {\n        key: 'soundStopped',\n        value: function soundStopped(sound) {}\n    }]);\n\n    return Intro;\n})(Phaser.State);\n\nexports['default'] = Intro;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/states/Intro.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/states/Intro.js?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Background = (function (_Phaser$TileSprite) {\n  _inherits(Background, _Phaser$TileSprite);\n\n  function Background(game, x, y, width, height) {\n    _classCallCheck(this, Background);\n\n    _get(Object.getPrototypeOf(Background.prototype), 'constructor', this).call(this, game, x, y, width, height, 'background');\n    this.game.physics.arcade.enableBody(this);\n\n    this.body.allowGravity = false;\n    this.body.immovable = true;\n  }\n\n  return Background;\n})(Phaser.TileSprite);\n\nexports['default'] = Background;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/objects/Background.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/objects/Background.js?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Rocket = (function (_Phaser$Sprite) {\n  _inherits(Rocket, _Phaser$Sprite);\n\n  function Rocket(game, x, y, frame) {\n    _classCallCheck(this, Rocket);\n\n    _get(Object.getPrototypeOf(Rocket.prototype), 'constructor', this).call(this, game, x, y, 'raket', frame);\n\n    this.anchor.setTo(0.5, 0.5);\n\n    this.game.physics.arcade.enableBody(this);\n  }\n\n  return Rocket;\n})(Phaser.Sprite);\n\nexports['default'] = Rocket;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/objects/Rocket.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/objects/Rocket.js?");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Space = (function (_Phaser$TileSprite) {\n  _inherits(Space, _Phaser$TileSprite);\n\n  function Space(game, x, y, width, height) {\n    _classCallCheck(this, Space);\n\n    _get(Object.getPrototypeOf(Space.prototype), 'constructor', this).call(this, game, x, y, width, height, 'background_overlay');\n    this.game.physics.arcade.enableBody(this);\n\n    this.body.allowGravity = false;\n    this.body.immovable = true;\n  }\n\n  return Space;\n})(Phaser.TileSprite);\n\nexports['default'] = Space;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/objects/Space.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/objects/Space.js?");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _objectsBackground = __webpack_require__(4);\n\nvar _objectsBackground2 = _interopRequireDefault(_objectsBackground);\n\nvar _objectsSpace = __webpack_require__(6);\n\nvar _objectsSpace2 = _interopRequireDefault(_objectsSpace);\n\nvar _objectsMeteoor = __webpack_require__(8);\n\nvar _objectsMeteoor2 = _interopRequireDefault(_objectsMeteoor);\n\nvar dead = false,\n    bg = true,\n    planeet = false;\n\nvar Play = (function (_Phaser$State) {\n  _inherits(Play, _Phaser$State);\n\n  function Play() {\n    _classCallCheck(this, Play);\n\n    _get(Object.getPrototypeOf(Play.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(Play, [{\n    key: 'create',\n    value: function create() {\n      this.bg = new _objectsBackground2['default'](this.game, 0, 0, 700, 700);\n      this.game.add.existing(this.bg);\n\n      this.rocketSound = this.game.add.audio('rocket_launch');\n      this.rocketSound.play();\n\n      this.space = new _objectsSpace2['default'](this.game, 0, 0, 700, 700);\n      this.game.add.existing(this.space);\n      //this.space.autoScroll(0,200);\n\n      this.rocket = this.game.add.sprite(350, 600, 'raket');\n      this.rocket.anchor.setTo(0.5, 0.5);\n      this.game.physics.arcade.enableBody(this.rocket);\n\n      this.meteoorGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 1, this.generateMeteoor, this);\n      this.meteoorGenerator.timer.start();\n\n      this.game.time.events.add(Phaser.Timer.SECOND * 10, this.showPlaneet, this);\n\n      this.currentmeteoor = 0;\n      this.firstrun = true;\n\n      this.cursors = this.game.input.keyboard.createCursorKeys();\n    }\n  }, {\n    key: 'showPlaneet',\n    value: function showPlaneet() {\n      this.planeet = this.game.add.sprite(350, 1000, 'planeet');\n      this.platform = this.game.add.sprite(350, 900, 'platform');\n\n      this.planeet.anchor.setTo(0.5, 0.5);\n      this.platform.anchor.setTo(0.5, 0.5);\n\n      this.game.physics.arcade.enableBody(this.platform);\n\n      this.platform.body.moves = false;\n\n      this.rocket.bringToTop();\n\n      this.space.body.x = 0;\n      this.space.body.y = -700;\n      this.space.revive();\n\n      this.game.add.tween(this.space).to({ x: 0, y: 0 }, 1000, Phaser.Easing.Quadratic.InOut, true);\n      this.game.add.tween(this.planeet).to({ x: 350, y: 400 }, 1000, Phaser.Easing.Quadratic.InOut, true);\n      this.game.add.tween(this.platform).to({ x: 350, y: 300 }, 1000, Phaser.Easing.Quadratic.InOut, true);\n      this.game.add.tween(this.rocket).to({ x: 350, y: 200 }, 1000, Phaser.Easing.Quadratic.InOut, true);\n      this.game.add.tween(this.firstmeteoor).to({ y: 800 }, 800, Phaser.Easing.Quadratic.InOut, true);\n      this.game.add.tween(this.secondmeteoor).to({ y: 800 }, 800, Phaser.Easing.Quadratic.InOut, true);\n      this.game.add.tween(this.thirdmeteoor).to({ y: 800 }, 800, Phaser.Easing.Quadratic.InOut, true);\n      this.game.add.tween(this.fourthmeteoor).to({ y: 800 }, 800, Phaser.Easing.Quadratic.InOut, true);\n      this.game.add.tween(this.fivehmeteoor).to({ y: 800 }, 800, Phaser.Easing.Quadratic.InOut, true);\n      this.game.add.tween(this.sixmeteoor).to({ y: 800 }, 800, Phaser.Easing.Quadratic.InOut, true);\n\n      var knipper = this.platform.animations.add('knipper');\n      this.platform.animations.play('knipper', 2, true);\n\n      this.game.physics.arcade.enableBody(this.planeet);\n\n      planeet = true;\n      this.game.time.events.add(Phaser.Timer.SECOND * 1, this.landing, this);\n    }\n  }, {\n    key: 'landing',\n    value: function landing() {\n      this.game.state.start('Landing');\n    }\n  }, {\n    key: 'deadHandler',\n    value: function deadHandler() {\n      this.deadButton = this.game.add.button(350, 500, 'gameover', this.restart, this);\n      this.deadButton.anchor.setTo(0.5, 0.5);\n      dead = true;\n      this.rocket.frame = 3;\n    }\n  }, {\n    key: 'restart',\n    value: function restart() {\n      dead = false;\n      bg = true;\n      planeet = false;\n      this.game.state.start('Play');\n    }\n  }, {\n    key: 'update',\n    value: function update() {\n\n      if (bg) {\n        this.space.body.y += 5;\n      }\n\n      if (!planeet) {\n        this.game.physics.arcade.collide(this.rocket, this.firstmeteoor, this.deadHandler, null, this);\n        this.game.physics.arcade.collide(this.rocket, this.secondmeteoor, this.deadHandler, null, this);\n        this.game.physics.arcade.collide(this.rocket, this.thirdmeteoor, this.deadHandler, null, this);\n        this.game.physics.arcade.collide(this.rocket, this.fourthmeteoor, this.deadHandler, null, this);\n        this.game.physics.arcade.collide(this.rocket, this.fivehmeteoor, this.deadHandler, null, this);\n        this.game.physics.arcade.collide(this.rocket, this.sixmeteoor, this.deadHandler, null, this);\n      }\n\n      this.rocket.frame = 0;\n\n      if (this.cursors.left.isDown && !dead) {\n        this.rocket.body.velocity.x += -10;\n        this.rocket.frame = 1;\n      }\n      if (this.cursors.right.isDown && !dead) {\n        this.rocket.body.velocity.x += 10;\n        this.rocket.frame = 2;\n      }\n      if (planeet) {\n        this.game.physics.arcade.collide(this.rocket, this.platform, this.geland, null, this);\n\n        if (this.cursors.up.isDown && !dead) {\n          this.rocket.body.velocity.y += -10;\n        }\n        if (this.cursors.down.isDown && !dead) {\n          this.rocket.body.velocity.y += 10;\n        }\n      }\n    }\n  }, {\n    key: 'generateMeteoor',\n    value: function generateMeteoor() {\n      this.meteoorY = this.game.rnd.integerInRange(0, 700);\n      if (this.firstrun) {\n        if (this.currentmeteoor == 0) {\n          this.firstmeteoor = new _objectsMeteoor2['default'](this.game, this.meteoorY, -10, this.color);\n          this.game.add.existing(this.firstmeteoor);\n        } else if (this.currentmeteoor == 1) {\n          this.secondmeteoor = new _objectsMeteoor2['default'](this.game, this.meteoorY, -10, this.color);\n          this.game.add.existing(this.secondmeteoor);\n        } else if (this.currentmeteoor == 2) {\n          this.thirdmeteoor = new _objectsMeteoor2['default'](this.game, this.meteoorY, -10, this.color);\n          this.game.add.existing(this.thirdmeteoor);\n        } else if (this.currentmeteoor == 3) {\n          this.fourthmeteoor = new _objectsMeteoor2['default'](this.game, this.meteoorY, -10, this.color);\n          this.game.add.existing(this.fourthmeteoor);\n          //destroy space start bg\n          this.space.kill();\n          bg = false;\n        } else if (this.currentmeteoor == 4) {\n          this.fivehmeteoor = new _objectsMeteoor2['default'](this.game, this.meteoorY, -10, this.color);\n          this.game.add.existing(this.fivehmeteoor);\n        } else if (this.currentmeteoor == 5) {\n          this.sixmeteoor = new _objectsMeteoor2['default'](this.game, this.meteoorY, -10, this.color);\n          this.game.add.existing(this.sixmeteoor);\n          this.firstrun = false;\n          this.currentmeteoor = -1;\n        }\n      }\n      if (this.currentmeteoor == 0) {\n        this.firstmeteoor.y = -10;\n      } else if (this.currentmeteoor == 1) {\n        this.secondmeteoor.y = -10;\n      } else if (this.currentmeteoor == 2) {\n        this.thirdmeteoor.y = -10;\n      } else if (this.currentmeteoor == 3) {\n        this.fourthmeteoor.y = -10;\n      } else if (this.currentmeteoor == 4) {\n        this.fivehmeteoor.y = -10;\n      } else if (this.currentmeteoor == 5) {\n        this.sixmeteoor.y = -10;\n        this.currentmeteoor = -1;\n      }\n      this.currentmeteoor++;\n    }\n  }]);\n\n  return Play;\n})(Phaser.State);\n\nexports['default'] = Play;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/states/Play.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/states/Play.js?");

/***/ },
/* 8 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Meteoor = (function (_Phaser$Sprite) {\n  _inherits(Meteoor, _Phaser$Sprite);\n\n  function Meteoor(game, x, y, frame) {\n    _classCallCheck(this, Meteoor);\n\n    _get(Object.getPrototypeOf(Meteoor.prototype), 'constructor', this).call(this, game, x, y, 'meteoor', frame);\n\n    this.anchor.setTo(0.5, 0.5);\n    this.game.physics.arcade.enableBody(this);\n\n    this.body.allowGravity = false;\n    this.body.immovable = true;\n\n    this.body.velocity.y = 140;\n  }\n\n  return Meteoor;\n})(Phaser.Sprite);\n\nexports['default'] = Meteoor;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/objects/Meteoor.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/objects/Meteoor.js?");

/***/ },
/* 9 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_scss/style.scss\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_scss/style.scss?");

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _objectsBackground = __webpack_require__(4);\n\nvar _objectsBackground2 = _interopRequireDefault(_objectsBackground);\n\nvar _objectsSpace = __webpack_require__(6);\n\nvar _objectsSpace2 = _interopRequireDefault(_objectsSpace);\n\nvar _objectsMeteoor = __webpack_require__(8);\n\nvar _objectsMeteoor2 = _interopRequireDefault(_objectsMeteoor);\n\nvar dead = false,\n    bg = true,\n    planeet = false;\n\nvar Play = (function (_Phaser$State) {\n  _inherits(Play, _Phaser$State);\n\n  function Play() {\n    _classCallCheck(this, Play);\n\n    _get(Object.getPrototypeOf(Play.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(Play, [{\n    key: 'create',\n    value: function create() {\n      this.bg = new _objectsBackground2['default'](this.game, 0, 0, 700, 700);\n      this.game.add.existing(this.bg);\n\n      this.space = new _objectsSpace2['default'](this.game, 0, 0, 700, 700);\n\n      this.game.add.existing(this.space);\n      //this.space.autoScroll(0,200);\n\n      this.rocket = this.game.add.sprite(350, 200, 'raketlanden');\n      this.rocket.anchor.setTo(0.5, 0.5);\n      this.game.physics.arcade.enableBody(this.rocket);\n\n      this.showPlaneet();\n\n      this.cursors = this.game.input.keyboard.createCursorKeys();\n    }\n  }, {\n    key: 'showPlaneet',\n    value: function showPlaneet() {\n      this.planeet = this.game.add.sprite(350, 400, 'planeet');\n      this.platform = this.game.add.sprite(350, 300, 'platform');\n\n      this.planeet.anchor.setTo(0.5, 0.5);\n      this.platform.anchor.setTo(0.5, 0.5);\n\n      this.game.physics.arcade.enableBody(this.platform);\n\n      this.platform.body.moves = false;\n\n      this.rocket.bringToTop();\n\n      var knipper = this.platform.animations.add('knipper');\n      this.platform.animations.play('knipper', 2, true);\n\n      this.game.physics.arcade.enableBody(this.planeet);\n\n      planeet = true;\n    }\n  }, {\n    key: 'geland',\n    value: function geland() {\n      this.rocket.body.moves = false;\n    }\n  }, {\n    key: 'update',\n    value: function update() {\n      //this.rocket.frame = 0;\n      this.game.physics.arcade.collide(this.rocket, this.platform, this.geland, null, this);\n\n      if (this.cursors.left.isDown) {\n        this.rocket.body.velocity.x += -10;\n        //this.rocket.frame = 1;\n      }\n      if (this.cursors.right.isDown) {\n        this.rocket.body.velocity.x += 10;\n        //this.rocket.frame = 2;\n      }\n      if (this.cursors.up.isDown && !dead) {\n        this.rocket.body.velocity.y += -10;\n      }\n      if (this.cursors.down.isDown && !dead) {\n        this.rocket.body.velocity.y += 10;\n      }\n    }\n  }]);\n\n  return Play;\n})(Phaser.State);\n\nexports['default'] = Play;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/states/Landing.js\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/states/Landing.js?");

/***/ }
/******/ ]);