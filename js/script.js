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

	eval("__webpack_require__(1);\nmodule.exports = __webpack_require__(2);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _classesStatesPreload = __webpack_require__(4);\n\nvar _classesStatesPreload2 = _interopRequireDefault(_classesStatesPreload);\n\nvar _classesStatesIntro = __webpack_require__(5);\n\nvar _classesStatesIntro2 = _interopRequireDefault(_classesStatesIntro);\n\nvar game = undefined;\n\nvar init = function init() {\n  game = new Phaser.Game(700, 700, Phaser.AUTO);\n  game.state.add('Preload', _classesStatesPreload2['default'], false);\n  game.state.add('Intro', _classesStatesIntro2['default'], false);\n  game.state.start('Preload');\n};\n\ninit();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/script.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/script.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_scss/style.scss\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_scss/style.scss?");

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Preload = (function (_Phaser$State) {\n  _inherits(Preload, _Phaser$State);\n\n  function Preload() {\n    _classCallCheck(this, Preload);\n\n    _get(Object.getPrototypeOf(Preload.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(Preload, [{\n    key: 'preload',\n    value: function preload() {\n\n      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);\n\n      this.load.image('raket', 'assets/raketklein.png');\n      this.load.image('meteoor', 'assets/meteoor.png');\n      this.load.image('planeet', 'assets/planeet.png');\n      this.load.image('background', 'assets/bg.png');\n\n      this.load.audio('rocket_launch', 'assets/sounds/launch.mp3');\n    }\n  }, {\n    key: 'create',\n    value: function create() {}\n  }, {\n    key: 'update',\n    value: function update() {}\n  }, {\n    key: 'onLoadComplete',\n    value: function onLoadComplete() {\n      this.game.state.start('Intro');\n    }\n  }]);\n\n  return Preload;\n})(Phaser.State);\n\nexports['default'] = Preload;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/states/Preload.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/states/Preload.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _objectsRocket = __webpack_require__(6);\n\nvar _objectsRocket2 = _interopRequireDefault(_objectsRocket);\n\nvar _objectsSpace = __webpack_require__(7);\n\nvar _objectsSpace2 = _interopRequireDefault(_objectsSpace);\n\nvar Intro = (function (_Phaser$State) {\n  _inherits(Intro, _Phaser$State);\n\n  function Intro() {\n    _classCallCheck(this, Intro);\n\n    _get(Object.getPrototypeOf(Intro.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(Intro, [{\n    key: 'create',\n    value: function create() {\n      this.space = new _objectsSpace2['default'](this.game, 0, 0, 700, 700);\n      this.game.add.existing(this.space);\n\n      this.rocket = new _objectsRocket2['default'](this.game, 350, 600);\n      this.game.add.existing(this.rocket);\n    }\n  }]);\n\n  return Intro;\n})(Phaser.State);\n\nexports['default'] = Intro;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/states/Intro.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/states/Intro.js?");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Rocket = (function (_Phaser$Sprite) {\n  _inherits(Rocket, _Phaser$Sprite);\n\n  function Rocket(game, x, y, frame) {\n    _classCallCheck(this, Rocket);\n\n    _get(Object.getPrototypeOf(Rocket.prototype), 'constructor', this).call(this, game, x, y, 'raket', frame);\n\n    this.anchor.setTo(0.5, 0.5);\n\n    this.game.physics.arcade.enableBody(this);\n  }\n\n  return Rocket;\n})(Phaser.Sprite);\n\nexports['default'] = Rocket;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/objects/Rocket.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/objects/Rocket.js?");

/***/ },
/* 7 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Track = (function (_Phaser$TileSprite) {\n  _inherits(Track, _Phaser$TileSprite);\n\n  function Track(game, x, y, width, height) {\n    _classCallCheck(this, Track);\n\n    _get(Object.getPrototypeOf(Track.prototype), 'constructor', this).call(this, game, x, y, width, height, 'background');\n    this.game.physics.arcade.enableBody(this);\n\n    this.body.allowGravity = false;\n    this.body.immovable = true;\n  }\n\n  return Track;\n})(Phaser.TileSprite);\n\nexports['default'] = Track;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./_js/classes/objects/Space.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./_js/classes/objects/Space.js?");

/***/ }
/******/ ]);