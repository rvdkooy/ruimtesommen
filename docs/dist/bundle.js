/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tweedee/dist/tweedee.js":
/*!***********************************************!*\
  !*** ../node_modules/tweedee/dist/tweedee.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){if(true)module.exports=e();else { var s, i; }}(window,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var h=e[s]={i:s,l:!1,exports:{}};return t[s].call(h.exports,h,h.exports,i),h.l=!0,h.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var h in t)i.d(s,h,function(e){return t[e]}.bind(null,h));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var s={};i.r(s),i.d(s,"addImage",function(){return r}),i.d(s,"addMovement",function(){return a}),i.d(s,"addEventEmitter",function(){return o});var h={};i.r(h),i.d(h,"GameObject",function(){return p}),i.d(h,"Background",function(){return f}),i.d(h,"SpriteSheetImageObject",function(){return g}),i.d(h,"ImageObject",function(){return w}),i.d(h,"CanvasObject",function(){return b});var n={};function r(t,e,i){this.image=t,this.width=e||0,this.height=i||0,this.scaleV=1,this.scaleH=1,this.updateImage=function(t){if(-1===this.scaleV||-1===this.scaleH){const e=-1===this.scaleV?-1*this.x:this.x,i=-1===this.scaleH?-1*this.y:this.y;t.ctx.save(),t.ctx.translate(t.scaler(this.width),0),t.ctx.scale(this.scaleV,this.scaleH),t.ctx.drawImage(this.image,t.scaler(e),t.scaler(i),t.scaler(this.width),t.scaler(this.height)),t.ctx.restore()}else t.ctx.drawImage(this.image,t.scaler(this.x),t.scaler(this.y),t.scaler(this.width),t.scaler(this.height))},this.updaters.push(this.updateImage.bind(this)),this.flipVertically=function(){this.scaleV=1===this.scaleV?-1:1},this.flipHorizontally=function(){this.scaleH=1===this.scaleH?-1:1}}function a(){this.direction=null,this.speed=0,this.easeInValue=0,this.boundaries=null,this.move=function(t,e,i){this.options=i||{},this.direction=t,null!=e&&(this.speed=e)},this.stop=function(){this.direction=null,this.speed=0,this.easeInValue=0},this.checkBoundary=(t=>{this.boundaries&&(0===this.direction&&this.y-t<=this.boundaries.top&&(this.y=this.boundaries.top,this.stop()),180===this.direction&&this.y+t+this.height>=this.boundaries.bottom&&(this.y=this.boundaries.bottom-this.height,this.stop()))}),this.updateMovement=function(){if(Number.isInteger(this.direction)){this.options.easeIn&&this.easeInValue<this.speed&&(this.easeInValue+=1);let t=this.options.easeIn?this.easeInValue:this.speed;this.checkBoundary(t),0===this.direction&&(this.y=this.y-t),90===this.direction&&(this.x=this.x+t),180===this.direction&&(this.y=this.y+t),270===this.direction&&(this.x=this.x-t)}},this.setBoundaries=function(t,e,i,s){this.boundaries={top:t,right:e,bottom:i,left:s}},this.updaters.push(this.updateMovement.bind(this))}i.r(n),i.d(n,"getRandomInt",function(){return y}),i.d(n,"keyCodes",function(){return x});const o=function(){this.listeners={},this.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},this.emit=function(t,e){this.listeners[t]&&this.listeners[t].forEach(t=>{t(e)})}};class c{constructor(t,e){this.options=e||{},this.gameObjects=[],this.isGameOver=!1,this.started=!1,this.container=document.querySelector(t),d.bind(this)(this.container,this.options),l.bind(this)(),o.bind(this)(),u.bind(this)(this.container,e),e.enableCollisionDetection&&m.bind(this)()}start(){this.started=!0,this.isGameOver=!1,this.gameLoop()}reset(){this.gameObjects=[]}gameOver(){this.isGameOver=!0}clear(){this.ctx.clearRect(0,0,this.width,this.height)}gameLoop(){this.isGameOver||(this.emit("beforeGameLoop",this),this.clear(),this.gameObjects.forEach(t=>t.update(this)),this.emit("afterGameLoop",this),window.requestAnimationFrame(()=>{this.gameLoop()}))}insert(t){this.gameObjects.push(t)}remove(t){this.gameObjects=this.gameObjects.filter(e=>e!==t)}showPopup(t){const e=document.createElement("div");e.className="modal",e.style.width=this.scaler(this.width)+"px";const i=document.createElement("div");if(i.className="modal-content",t.title){const e=document.createElement("h1");e.innerHTML=t.title,i.appendChild(e)}if(t.text){const e=document.createElement("div");e.innerHTML=t.text,i.appendChild(e)}t.buttons&&t.buttons.length&&t.buttons.forEach(t=>{const e=document.createElement("button");e.innerHTML=t.text,e.addEventListener("click",t.onClick),i.appendChild(e)}),e.appendChild(i),this.container.appendChild(e)}closePopup(){const t=this.container.querySelector(".modal");t&&t.parentNode.removeChild(t)}}const d=function(t,e){const i=document.createElement("div");i.style.display="none",e.resources&&(e.resources.filter(t=>"image"===t.type).forEach(t=>{const e=document.createElement("img");e.src=t.src,e.id=t.src,e.dataset.name=t.name,i.append(e)}),e.resources.filter(t=>"sound"===t.type).forEach(t=>{const e=document.createElement("audio");e.src=t.src,e.id=t.src,e.dataset.name=t.name,i.append(e)})),t.appendChild(i),this.getResource=function(t){const e=document.querySelector(`[data-name='${t}']`);if(!e)throw new Error(`Couldn't find resource for: '${t}', please register this as an image resource!`);return"AUDIO"===e.tagName?e.cloneNode():e}},l=function(){this.keysDown=[],window.addEventListener("keydown",t=>{this.keysDown.push(t.keyCode),this.emit("keydown",t.keyCode)}),window.addEventListener("keyup",t=>{this.keydown=this.keysDown.filter(e=>e!==t.keyCode),this.listeners.keyup&&this.listeners.keyup.forEach(e=>{e(t.keyCode)})})},u=function(t,e){this.width=e.width||1024,this.height=e.height||769,this.calculateDimensions=function(e){const i=window.innerHeight,s=window.innerWidth;s>i?(this.scale=i/this.height,t.style.width=this.scaler(this.width)+"px",t.style.height=this.scaler(this.height)+"px",e.width=this.scaler(this.width),e.height=this.scaler(this.height)):(this.scale=s/this.width,t.style.width=this.scaler(this.width)+"px",t.style.height=this.scaler(this.height)+"px",e.width=this.scaler(this.width),e.height=this.scaler(this.height))},this.scaler=function(t){return t*this.scale};const i=document.createElement("canvas");i.className="world",t.appendChild(i),this.calculateDimensions(i),this.ctx=i.getContext("2d"),window.addEventListener("resize",()=>this.calculateDimensions(i)),i.focus()},m=function(){this.on("afterGameLoop",t=>{const e=t.gameObjects.filter(t=>t.x&&t.y&&t.width&&t.height);e.forEach(i=>{e.filter(t=>t!==i).forEach(e=>{i.x<e.x+e.width&&i.x+i.width>e.x&&i.y<e.y+e.height&&i.y+i.height>e.y&&t.emit("collisionDetected",{subject:i,target:e})})})})};class p{constructor(t,e,i,s){this.x=t||0,this.y=e||0,this.width=i||0,this.height=s||0,this.updaters=[]}update(t){this.updaters.forEach(e=>e(t,this))}}class f extends p{constructor(t,e,i,s){super(0,0,e,i),this.image=t,s&&(this.scrollOptions=s),this.updaters.push(this.drawBackground.bind(this))}drawBackground(t){if(this.scrollOptions){const{speed:e,direction:i}=this.scrollOptions;this.scrollValue=this.scrollValue||0;const s=t.scaler(t.width);this.scrollValue>=s&&(this.scrollValue=0),90===i?(this.scrollValue=this.scrollValue+=e,t.ctx.drawImage(this.image,Math.round(this.scrollValue-s),0,t.scaler(this.width),t.scaler(this.height)),t.ctx.drawImage(this.image,Math.round(this.scrollValue),0,t.scaler(this.width),t.scaler(this.height))):270===i&&(this.scrollValue-=e,t.ctx.drawImage(this.image,Math.round(this.scrollValue+s),0,t.scaler(this.width),t.scaler(this.height)),t.ctx.drawImage(this.image,Math.round(this.scrollValue),0,t.scaler(this.width),t.scaler(this.height)))}else t.ctx.drawImage(this.image,0,0,t.scaler(this.width),t.scaler(this.height))}}class g extends p{constructor(t,e,i,s,h){super(e,i,s,h),this.image=t,this.sWidth=s,this.sHeight=h,this.repeat=!1,this.frames=Math.round(t.width/s),this.speed=0,this.currentFrame=0,this.updaters.push(this.drawSpritesheetImage.bind(this)),o.bind(this)()}drawSpritesheetImage(t){if(this.currentFrame>=this.frames)return void this.emit("done",this);this.currentFrame>=this.frames&&this.repeat&&(this.currentFrame=0,this.emit("repeat",this)),t.ctx.drawImage(this.image,this.currentFrame*this.width,0,this.sWidth,this.sHeight,t.scaler(this.x),t.scaler(this.y),t.scaler(this.width),t.scaler(this.height)),this.speed=this.speed+.1;const e=Math.round(this.speed);this.currentFrame+=e,1===e&&(this.speed=0)}}class w extends p{constructor(t,e,i,s,h){super(e,i),a.bind(this)(),r.bind(this)(t,s||t.width,h||t.height)}}class b extends p{constructor(t){super(0,0),this.updaters.push(t)}}const y=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,x={backspace:8,tab:9,enter:13,shiftleft:16,shiftright:16,ctrlleft:17,ctrlrigght:17,altleft:18,altright:18,pause:19,capslock:20,escape:27,space:32,pageup:33,pagedown:34,end:35,home:36,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,insert:45,delete:46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,metaleft:91,metaright:92,select:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,numpadmultiply:106,numpadadd:107,numpadsubtract:109,numpaddecimal:110,numpaddivide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrolllock:145,semicolon:186,equalsign:187,comma:188,minus:189,period:190,slash:191,backquote:192,bracketleft:219,backslash:220,braketright:221,quote:222};i.d(e,"GameWorld",function(){return c}),i.d(e,"mixins",function(){return s}),i.d(e,"objects",function(){return h}),i.d(e,"utils",function(){return n});e.default={GameWorld:c,mixins:s,objects:h,utils:n}}])});
//# sourceMappingURL=tweedee.js.map

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tweedee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tweedee */ "../node_modules/tweedee/dist/tweedee.js");
/* harmony import */ var tweedee__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tweedee__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects */ "./objects.js");



const keyCodeToDirectionMap = {
  [tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].keyCodes.arrowup]: 0,
  [tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].keyCodes.arrowdown]: 180,
};

const world = new tweedee__WEBPACK_IMPORTED_MODULE_0__["GameWorld"]('#container', {
  resources: [
    { type: 'image', name: 'background', src: 'static/background.png' },
    { type: 'image', name: 'spaceship', src: 'static/spaceship.png' },
    { type: 'image', name: 'astroid1', src: 'static/astroid_1.png' },
    { type: 'image', name: 'dashboard', src: 'static/dashboard.png' },
    { type: 'image', name: 'explosionspritesheet', src: 'static/explosion.png' },
    { type: 'sound', name: 'shoot', src: 'static/shoot.wav' },
    { type: 'sound', name: 'explosion', src: 'static/explosion.wav' },
    { type: 'sound', name: 'crash', src: 'static/crash.wav' },
  ],
  enableCollisionDetection: true,
});

let _spaceship, _scoreboard, _exercises = null;

world.on('keydown', (keyCode) => {
  if (_spaceship) {
    handleArrowKeys(keyCode, _spaceship);
    handleShootLaser(keyCode, _spaceship);
  }
  handleRestartGame(keyCode);
});

const handleArrowKeys = (keyCode, spaceship) => {
  const direction = keyCodeToDirectionMap[keyCode];
  Number.isInteger(direction) && spaceship.move(direction, 8, { easeIn: true });
};

world.on('keyup', (keyCode) => {
  const direction = keyCodeToDirectionMap[keyCode];
  Number.isInteger(direction) && _spaceship.stop();
});

const handleShootLaser = (keyCode, spaceship) => {
  if (keyCode === tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].keyCodes.space) {
    world.insert(new _objects__WEBPACK_IMPORTED_MODULE_1__["Laser"]((spaceship.x + (spaceship.width)), (spaceship.y + (spaceship.height / 2))));
    world.getResource('shoot').play();
  }
};

const handleRestartGame = (keyCode) => {
  if (keyCode === tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].keyCodes.enter && (world.isGameOver || !world.started)) {
    startTheGame();
  }
};

world.on('collisionDetected', ({ subject, target }) => {
  const addExplosionTo = (x, y, cb) => {
    const explosion = new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].SpriteSheetImageObject(world.getResource('explosionspritesheet'), x, y, 142, 200);
    explosion.frames = 8;
    explosion.on('done', () => {
      world.remove(explosion);
      cb && cb();
    });
    world.insert(explosion);
  }
  
  
  if ((subject instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Spaceship"] && target instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Astroid"]) ||
    (subject instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Spaceship"] && target instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Laser"])) {
      world.remove(subject);
      world.getResource('crash').play();
      addExplosionTo(subject.x, subject.y, () => {
        world.gameOver();
        world.showPopup({
          title: 'Game over!',
          text: 'Druk op de "enter" toets om opnieuw te beginnen.',
        });
      });
  }
  
  if ((subject instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Laser"] && target instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Astroid"])) {
    if (target.answer === _exercises.answer) {
      world.getResource('explosion').play();
      
      addExplosionTo(target.x, target.y);
      
      world.remove(target);
      world.remove(subject);
      world.gameObjects.filter(go => go instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Astroid"]).forEach(go => {
        go.move(go.direction, go.fullSpeed);
      });
      _scoreboard.add(10);
    } else {
      subject.move(270, (subject.speed * 1.5));
      target.move(270, target.fullSpeed);
    }
  }
});

world.on('afterGameLoop', () => {
  const astroids = world.gameObjects.filter(go => go instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Astroid"]);
  if (astroids.length === 0) {
    insertAstroids();
  } else {
    astroids.filter(astroid => astroid.x < 0 - (astroid.width * 2)).forEach(astroid => world.remove(astroid));
  }
  world.gameObjects.filter(go => go instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Laser"] && (go.x + go.width) > world.width).forEach(laser => world.remove(laser));
});

const insertAstroids = () => {
  const y = world.height / 3;
  _exercises.createNew();
  const answers = _exercises.getRandomAnswers();
  const astroid1 = new _objects__WEBPACK_IMPORTED_MODULE_1__["Astroid"](world.getResource('astroid1'),(world.width - tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].getRandomInt(130, 170)), ((y * 1) / 2) - 75, answers[0]);
  const astroid2 = new _objects__WEBPACK_IMPORTED_MODULE_1__["Astroid"](world.getResource('astroid1'), (world.width - tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].getRandomInt(130, 170)), ((y * 2) / 2), answers[1]);
  const astroid3 = new _objects__WEBPACK_IMPORTED_MODULE_1__["Astroid"](world.getResource('astroid1'), (world.width - tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].getRandomInt(130, 170)), ((y * 3) / 2) + 75, answers[2]);

  world.insert(astroid1);
  world.insert(astroid2);
  world.insert(astroid3);
}

const startTheGame = () => {
  const spaceship = new _objects__WEBPACK_IMPORTED_MODULE_1__["Spaceship"](world.getResource('spaceship'), 100, (world.height / 2));
  spaceship.setBoundaries(40, world.width, world.height - 120, 0);
  
  const background = new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Background(world.getResource('background'), world.width, world.height);
  const scoreboard = new _objects__WEBPACK_IMPORTED_MODULE_1__["Scoreboard"](world.getResource('dashboard'), 0, world.height - 120);
  const exercises = new _objects__WEBPACK_IMPORTED_MODULE_1__["Exercises"]();
  
  _scoreboard = scoreboard;
  _spaceship = spaceship;
  _exercises = exercises;

  world.closePopup();
  world.reset();
  world.insert(background);
  world.insert(scoreboard);
  world.insert(exercises);
  world.insert(spaceship);
  world.start();
};

world.showPopup({
  title: 'Klaar om te beginnen?',
  text: [ 'Druk dan op de "enter" toets. <br /><br />',
          'Gebruik de pijltjes toetsen om je ruimteschip te besturen en de spatiebalk om een rots te schieten<br /><br />',
          'Dit spel is gemaakt door: <br />',
          'Ronald van der Kooij & Thijs van der Kooij'
        ].join(' '),
});

/***/ }),

/***/ "./objects.js":
/*!********************!*\
  !*** ./objects.js ***!
  \********************/
/*! exports provided: Laser, Astroid, Spaceship, Scoreboard, Exercises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Laser", function() { return Laser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Astroid", function() { return Astroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spaceship", function() { return Spaceship; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scoreboard", function() { return Scoreboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exercises", function() { return Exercises; });
/* harmony import */ var tweedee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tweedee */ "../node_modules/tweedee/dist/tweedee.js");
/* harmony import */ var tweedee__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tweedee__WEBPACK_IMPORTED_MODULE_0__);


class Laser extends tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].GameObject {
  constructor(x, y) {
    super(x, y, 20, 5);
    tweedee__WEBPACK_IMPORTED_MODULE_0__["mixins"].addMovement.bind(this)();
    this.updaters.push(this.drawLaser.bind(this));
    this.move(90, 15);
  }

  drawLaser(world) {
    world.ctx.beginPath();
    world.ctx.moveTo(world.scaler(this.x), world.scaler(this.y));
    world.ctx.lineTo(world.scaler(this.x) + this.width, world.scaler(this.y));
    world.ctx.strokeStyle = "#FF0000";
    world.ctx.lineWidth = this.height;
    world.ctx.stroke(); 
  }
}

class Astroid extends tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].ImageObject {
  constructor(image, x, y, answer) {
    super(image, x, y);
    this.answer = answer;
    tweedee__WEBPACK_IMPORTED_MODULE_0__["mixins"].addMovement.bind(this)();
    this.updaters.push(this.drawAnswer.bind(this));
    this.move(270, 1);
    this.fullSpeed = 3;
  }

  drawAnswer(world) {
    world.ctx.font = `${world.scaler(40)}px Arial`;
    world.ctx.fillStyle = 'white';
    world.ctx.fillText(this.answer, world.scaler(this.x + 50), world.scaler(this.y + 85));
  }
}

class Spaceship extends tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].ImageObject {
  constructor(image, width, height, x, y) {
    super(image, width, height, x, y);
  }
}

class Scoreboard extends tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].ImageObject {
  constructor(image, width, height, x, y) {
    super(image, width, height, x, y);
    this.updaters.push(this.drawScoreboard.bind(this));
    this.score = 0;
  }

  add (score) {
    this.score += score;
  }

  drawScoreboard (world) {
    world.ctx.save();
    world.ctx.font = `${world.scaler(30)}px Arial`;
    world.ctx.fillStyle = 'white';
    world.ctx.textAlign = "left"; 
    
    world.ctx.fillText('Score:  ' + this.score, world.scaler(20), world.scaler(30));

    // world.ctx.fillText('Levens:', world.scaler(120), world.scaler(world.height - 45));
    // world.ctx.fillText("1", world.scaler(350), world.scaler(world.height - 45));

    world.ctx.restore();
  }
}

class Exercises extends tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].GameObject {
  constructor(x, y) {
    super (x, y);
    this.updaters.push(this.updateExercise.bind(this));
    this.text = "";
    this.answer = null;
  }

  createNew () {
    const a = tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].getRandomInt(1, 10);
    const b = tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].getRandomInt(1, 10);
    this.a = a;
    this.b = b;
    this.text = a + ' x ' + b;
    this.answer = a * b;
  }

  getRandomAnswers () {
    const result = new Array(3);
    const position = tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].getRandomInt(0, 2);
    result[position] = this.answer;
    for (let index = 0; index <= 2; index++) {
      if (index !== position) {
        let b = tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].getRandomInt(1, 10);
        while (b === this.b) {
          b = tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].getRandomInt(1, 10);
        }
        result[index] = this.a * b;
      }
    }
    return result;    
  }

  updateExercise(world) {
    world.ctx.save();
    world.ctx.font = `${world.scaler(60)}px Arial`;
    world.ctx.fillStyle = 'white';
    world.ctx.textAlign = "center"; 
    world.ctx.fillText('Som:', world.scaler(280), world.scaler(world.height - 40));
    world.ctx.fillText(this.text, world.scaler(510), world.scaler(world.height - 40));
    world.ctx.restore();
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90d2VlZGVlL2Rpc3QvdHdlZWRlZS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9vYmplY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxlQUFlLEdBQUcsSUFBaUQsb0JBQW9CLEtBQUssYUFBaUksQ0FBQyxtQkFBbUIsbUJBQW1CLFNBQVMsY0FBYyw0QkFBNEIsWUFBWSxxQkFBcUIsMkRBQTJELHVDQUF1QyxxQ0FBcUMsb0JBQW9CLEVBQUUsaUJBQWlCLDRGQUE0RixlQUFlLHdDQUF3QyxTQUFTLEVBQUUsbUJBQW1CLDhCQUE4QixxREFBcUQsMEJBQTBCLDZDQUE2QyxzQkFBc0IsNkRBQTZELFlBQVksZUFBZSxTQUFTLGlCQUFpQixp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c0IsK0NBQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4Q0FBTTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFTyx3QkFBd0IsK0NBQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRU8seUJBQXlCLCtDQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0EsaUM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU8sd0JBQXdCLCtDQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsNkNBQUs7QUFDbkIsY0FBYyw2Q0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsNkNBQUs7QUFDMUI7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBLGdCQUFnQiw2Q0FBSztBQUNyQjtBQUNBLGNBQWMsNkNBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0EsbUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIiFmdW5jdGlvbih0LGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWUoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZSk7ZWxzZXt2YXIgaT1lKCk7Zm9yKHZhciBzIGluIGkpKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6dClbc109aVtzXX19KHdpbmRvdyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBpKHMpe2lmKGVbc10pcmV0dXJuIGVbc10uZXhwb3J0czt2YXIgaD1lW3NdPXtpOnMsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtzXS5jYWxsKGguZXhwb3J0cyxoLGguZXhwb3J0cyxpKSxoLmw9ITAsaC5leHBvcnRzfXJldHVybiBpLm09dCxpLmM9ZSxpLmQ9ZnVuY3Rpb24odCxlLHMpe2kubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpzfSl9LGkucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxpLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PWkodCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHM9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihpLnIocyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHMsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBoIGluIHQpaS5kKHMsaCxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLGgpKTtyZXR1cm4gc30saS5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBpLmQoZSxcImFcIixlKSxlfSxpLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LGkucD1cIlwiLGkoaS5zPTApfShbZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2kucihlKTt2YXIgcz17fTtpLnIocyksaS5kKHMsXCJhZGRJbWFnZVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KSxpLmQocyxcImFkZE1vdmVtZW50XCIsZnVuY3Rpb24oKXtyZXR1cm4gYX0pLGkuZChzLFwiYWRkRXZlbnRFbWl0dGVyXCIsZnVuY3Rpb24oKXtyZXR1cm4gb30pO3ZhciBoPXt9O2kucihoKSxpLmQoaCxcIkdhbWVPYmplY3RcIixmdW5jdGlvbigpe3JldHVybiBwfSksaS5kKGgsXCJCYWNrZ3JvdW5kXCIsZnVuY3Rpb24oKXtyZXR1cm4gZn0pLGkuZChoLFwiU3ByaXRlU2hlZXRJbWFnZU9iamVjdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGd9KSxpLmQoaCxcIkltYWdlT2JqZWN0XCIsZnVuY3Rpb24oKXtyZXR1cm4gd30pLGkuZChoLFwiQ2FudmFzT2JqZWN0XCIsZnVuY3Rpb24oKXtyZXR1cm4gYn0pO3ZhciBuPXt9O2Z1bmN0aW9uIHIodCxlLGkpe3RoaXMuaW1hZ2U9dCx0aGlzLndpZHRoPWV8fDAsdGhpcy5oZWlnaHQ9aXx8MCx0aGlzLnNjYWxlVj0xLHRoaXMuc2NhbGVIPTEsdGhpcy51cGRhdGVJbWFnZT1mdW5jdGlvbih0KXtpZigtMT09PXRoaXMuc2NhbGVWfHwtMT09PXRoaXMuc2NhbGVIKXtjb25zdCBlPS0xPT09dGhpcy5zY2FsZVY/LTEqdGhpcy54OnRoaXMueCxpPS0xPT09dGhpcy5zY2FsZUg/LTEqdGhpcy55OnRoaXMueTt0LmN0eC5zYXZlKCksdC5jdHgudHJhbnNsYXRlKHQuc2NhbGVyKHRoaXMud2lkdGgpLDApLHQuY3R4LnNjYWxlKHRoaXMuc2NhbGVWLHRoaXMuc2NhbGVIKSx0LmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSx0LnNjYWxlcihlKSx0LnNjYWxlcihpKSx0LnNjYWxlcih0aGlzLndpZHRoKSx0LnNjYWxlcih0aGlzLmhlaWdodCkpLHQuY3R4LnJlc3RvcmUoKX1lbHNlIHQuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLHQuc2NhbGVyKHRoaXMueCksdC5zY2FsZXIodGhpcy55KSx0LnNjYWxlcih0aGlzLndpZHRoKSx0LnNjYWxlcih0aGlzLmhlaWdodCkpfSx0aGlzLnVwZGF0ZXJzLnB1c2godGhpcy51cGRhdGVJbWFnZS5iaW5kKHRoaXMpKSx0aGlzLmZsaXBWZXJ0aWNhbGx5PWZ1bmN0aW9uKCl7dGhpcy5zY2FsZVY9MT09PXRoaXMuc2NhbGVWPy0xOjF9LHRoaXMuZmxpcEhvcml6b250YWxseT1mdW5jdGlvbigpe3RoaXMuc2NhbGVIPTE9PT10aGlzLnNjYWxlSD8tMToxfX1mdW5jdGlvbiBhKCl7dGhpcy5kaXJlY3Rpb249bnVsbCx0aGlzLnNwZWVkPTAsdGhpcy5lYXNlSW5WYWx1ZT0wLHRoaXMuYm91bmRhcmllcz1udWxsLHRoaXMubW92ZT1mdW5jdGlvbih0LGUsaSl7dGhpcy5vcHRpb25zPWl8fHt9LHRoaXMuZGlyZWN0aW9uPXQsbnVsbCE9ZSYmKHRoaXMuc3BlZWQ9ZSl9LHRoaXMuc3RvcD1mdW5jdGlvbigpe3RoaXMuZGlyZWN0aW9uPW51bGwsdGhpcy5zcGVlZD0wLHRoaXMuZWFzZUluVmFsdWU9MH0sdGhpcy5jaGVja0JvdW5kYXJ5PSh0PT57dGhpcy5ib3VuZGFyaWVzJiYoMD09PXRoaXMuZGlyZWN0aW9uJiZ0aGlzLnktdDw9dGhpcy5ib3VuZGFyaWVzLnRvcCYmKHRoaXMueT10aGlzLmJvdW5kYXJpZXMudG9wLHRoaXMuc3RvcCgpKSwxODA9PT10aGlzLmRpcmVjdGlvbiYmdGhpcy55K3QrdGhpcy5oZWlnaHQ+PXRoaXMuYm91bmRhcmllcy5ib3R0b20mJih0aGlzLnk9dGhpcy5ib3VuZGFyaWVzLmJvdHRvbS10aGlzLmhlaWdodCx0aGlzLnN0b3AoKSkpfSksdGhpcy51cGRhdGVNb3ZlbWVudD1mdW5jdGlvbigpe2lmKE51bWJlci5pc0ludGVnZXIodGhpcy5kaXJlY3Rpb24pKXt0aGlzLm9wdGlvbnMuZWFzZUluJiZ0aGlzLmVhc2VJblZhbHVlPHRoaXMuc3BlZWQmJih0aGlzLmVhc2VJblZhbHVlKz0xKTtsZXQgdD10aGlzLm9wdGlvbnMuZWFzZUluP3RoaXMuZWFzZUluVmFsdWU6dGhpcy5zcGVlZDt0aGlzLmNoZWNrQm91bmRhcnkodCksMD09PXRoaXMuZGlyZWN0aW9uJiYodGhpcy55PXRoaXMueS10KSw5MD09PXRoaXMuZGlyZWN0aW9uJiYodGhpcy54PXRoaXMueCt0KSwxODA9PT10aGlzLmRpcmVjdGlvbiYmKHRoaXMueT10aGlzLnkrdCksMjcwPT09dGhpcy5kaXJlY3Rpb24mJih0aGlzLng9dGhpcy54LXQpfX0sdGhpcy5zZXRCb3VuZGFyaWVzPWZ1bmN0aW9uKHQsZSxpLHMpe3RoaXMuYm91bmRhcmllcz17dG9wOnQscmlnaHQ6ZSxib3R0b206aSxsZWZ0OnN9fSx0aGlzLnVwZGF0ZXJzLnB1c2godGhpcy51cGRhdGVNb3ZlbWVudC5iaW5kKHRoaXMpKX1pLnIobiksaS5kKG4sXCJnZXRSYW5kb21JbnRcIixmdW5jdGlvbigpe3JldHVybiB5fSksaS5kKG4sXCJrZXlDb2Rlc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHh9KTtjb25zdCBvPWZ1bmN0aW9uKCl7dGhpcy5saXN0ZW5lcnM9e30sdGhpcy5vbj1mdW5jdGlvbih0LGUpe3RoaXMubGlzdGVuZXJzW3RdfHwodGhpcy5saXN0ZW5lcnNbdF09W10pLHRoaXMubGlzdGVuZXJzW3RdLnB1c2goZSl9LHRoaXMuZW1pdD1mdW5jdGlvbih0LGUpe3RoaXMubGlzdGVuZXJzW3RdJiZ0aGlzLmxpc3RlbmVyc1t0XS5mb3JFYWNoKHQ9Pnt0KGUpfSl9fTtjbGFzcyBje2NvbnN0cnVjdG9yKHQsZSl7dGhpcy5vcHRpb25zPWV8fHt9LHRoaXMuZ2FtZU9iamVjdHM9W10sdGhpcy5pc0dhbWVPdmVyPSExLHRoaXMuc3RhcnRlZD0hMSx0aGlzLmNvbnRhaW5lcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpLGQuYmluZCh0aGlzKSh0aGlzLmNvbnRhaW5lcix0aGlzLm9wdGlvbnMpLGwuYmluZCh0aGlzKSgpLG8uYmluZCh0aGlzKSgpLHUuYmluZCh0aGlzKSh0aGlzLmNvbnRhaW5lcixlKSxlLmVuYWJsZUNvbGxpc2lvbkRldGVjdGlvbiYmbS5iaW5kKHRoaXMpKCl9c3RhcnQoKXt0aGlzLnN0YXJ0ZWQ9ITAsdGhpcy5pc0dhbWVPdmVyPSExLHRoaXMuZ2FtZUxvb3AoKX1yZXNldCgpe3RoaXMuZ2FtZU9iamVjdHM9W119Z2FtZU92ZXIoKXt0aGlzLmlzR2FtZU92ZXI9ITB9Y2xlYXIoKXt0aGlzLmN0eC5jbGVhclJlY3QoMCwwLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpfWdhbWVMb29wKCl7dGhpcy5pc0dhbWVPdmVyfHwodGhpcy5lbWl0KFwiYmVmb3JlR2FtZUxvb3BcIix0aGlzKSx0aGlzLmNsZWFyKCksdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKHQ9PnQudXBkYXRlKHRoaXMpKSx0aGlzLmVtaXQoXCJhZnRlckdhbWVMb29wXCIsdGhpcyksd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e3RoaXMuZ2FtZUxvb3AoKX0pKX1pbnNlcnQodCl7dGhpcy5nYW1lT2JqZWN0cy5wdXNoKHQpfXJlbW92ZSh0KXt0aGlzLmdhbWVPYmplY3RzPXRoaXMuZ2FtZU9iamVjdHMuZmlsdGVyKGU9PmUhPT10KX1zaG93UG9wdXAodCl7Y29uc3QgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuY2xhc3NOYW1lPVwibW9kYWxcIixlLnN0eWxlLndpZHRoPXRoaXMuc2NhbGVyKHRoaXMud2lkdGgpK1wicHhcIjtjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWYoaS5jbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCIsdC50aXRsZSl7Y29uc3QgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7ZS5pbm5lckhUTUw9dC50aXRsZSxpLmFwcGVuZENoaWxkKGUpfWlmKHQudGV4dCl7Y29uc3QgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuaW5uZXJIVE1MPXQudGV4dCxpLmFwcGVuZENoaWxkKGUpfXQuYnV0dG9ucyYmdC5idXR0b25zLmxlbmd0aCYmdC5idXR0b25zLmZvckVhY2godD0+e2NvbnN0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtlLmlubmVySFRNTD10LnRleHQsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0Lm9uQ2xpY2spLGkuYXBwZW5kQ2hpbGQoZSl9KSxlLmFwcGVuZENoaWxkKGkpLHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGUpfWNsb3NlUG9wdXAoKXtjb25zdCB0PXRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7dCYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpfX1jb25zdCBkPWZ1bmN0aW9uKHQsZSl7Y29uc3QgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixlLnJlc291cmNlcyYmKGUucmVzb3VyY2VzLmZpbHRlcih0PT5cImltYWdlXCI9PT10LnR5cGUpLmZvckVhY2godD0+e2NvbnN0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtlLnNyYz10LnNyYyxlLmlkPXQuc3JjLGUuZGF0YXNldC5uYW1lPXQubmFtZSxpLmFwcGVuZChlKX0pLGUucmVzb3VyY2VzLmZpbHRlcih0PT5cInNvdW5kXCI9PT10LnR5cGUpLmZvckVhY2godD0+e2NvbnN0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO2Uuc3JjPXQuc3JjLGUuaWQ9dC5zcmMsZS5kYXRhc2V0Lm5hbWU9dC5uYW1lLGkuYXBwZW5kKGUpfSkpLHQuYXBwZW5kQ2hpbGQoaSksdGhpcy5nZXRSZXNvdXJjZT1mdW5jdGlvbih0KXtjb25zdCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hbWU9JyR7dH0nXWApO2lmKCFlKXRocm93IG5ldyBFcnJvcihgQ291bGRuJ3QgZmluZCByZXNvdXJjZSBmb3I6ICcke3R9JywgcGxlYXNlIHJlZ2lzdGVyIHRoaXMgYXMgYW4gaW1hZ2UgcmVzb3VyY2UhYCk7cmV0dXJuXCJBVURJT1wiPT09ZS50YWdOYW1lP2UuY2xvbmVOb2RlKCk6ZX19LGw9ZnVuY3Rpb24oKXt0aGlzLmtleXNEb3duPVtdLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLHQ9Pnt0aGlzLmtleXNEb3duLnB1c2godC5rZXlDb2RlKSx0aGlzLmVtaXQoXCJrZXlkb3duXCIsdC5rZXlDb2RlKX0pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIix0PT57dGhpcy5rZXlkb3duPXRoaXMua2V5c0Rvd24uZmlsdGVyKGU9PmUhPT10LmtleUNvZGUpLHRoaXMubGlzdGVuZXJzLmtleXVwJiZ0aGlzLmxpc3RlbmVycy5rZXl1cC5mb3JFYWNoKGU9PntlKHQua2V5Q29kZSl9KX0pfSx1PWZ1bmN0aW9uKHQsZSl7dGhpcy53aWR0aD1lLndpZHRofHwxMDI0LHRoaXMuaGVpZ2h0PWUuaGVpZ2h0fHw3NjksdGhpcy5jYWxjdWxhdGVEaW1lbnNpb25zPWZ1bmN0aW9uKGUpe2NvbnN0IGk9d2luZG93LmlubmVySGVpZ2h0LHM9d2luZG93LmlubmVyV2lkdGg7cz5pPyh0aGlzLnNjYWxlPWkvdGhpcy5oZWlnaHQsdC5zdHlsZS53aWR0aD10aGlzLnNjYWxlcih0aGlzLndpZHRoKStcInB4XCIsdC5zdHlsZS5oZWlnaHQ9dGhpcy5zY2FsZXIodGhpcy5oZWlnaHQpK1wicHhcIixlLndpZHRoPXRoaXMuc2NhbGVyKHRoaXMud2lkdGgpLGUuaGVpZ2h0PXRoaXMuc2NhbGVyKHRoaXMuaGVpZ2h0KSk6KHRoaXMuc2NhbGU9cy90aGlzLndpZHRoLHQuc3R5bGUud2lkdGg9dGhpcy5zY2FsZXIodGhpcy53aWR0aCkrXCJweFwiLHQuc3R5bGUuaGVpZ2h0PXRoaXMuc2NhbGVyKHRoaXMuaGVpZ2h0KStcInB4XCIsZS53aWR0aD10aGlzLnNjYWxlcih0aGlzLndpZHRoKSxlLmhlaWdodD10aGlzLnNjYWxlcih0aGlzLmhlaWdodCkpfSx0aGlzLnNjYWxlcj1mdW5jdGlvbih0KXtyZXR1cm4gdCp0aGlzLnNjYWxlfTtjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7aS5jbGFzc05hbWU9XCJ3b3JsZFwiLHQuYXBwZW5kQ2hpbGQoaSksdGhpcy5jYWxjdWxhdGVEaW1lbnNpb25zKGkpLHRoaXMuY3R4PWkuZ2V0Q29udGV4dChcIjJkXCIpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsKCk9PnRoaXMuY2FsY3VsYXRlRGltZW5zaW9ucyhpKSksaS5mb2N1cygpfSxtPWZ1bmN0aW9uKCl7dGhpcy5vbihcImFmdGVyR2FtZUxvb3BcIix0PT57Y29uc3QgZT10LmdhbWVPYmplY3RzLmZpbHRlcih0PT50LngmJnQueSYmdC53aWR0aCYmdC5oZWlnaHQpO2UuZm9yRWFjaChpPT57ZS5maWx0ZXIodD0+dCE9PWkpLmZvckVhY2goZT0+e2kueDxlLngrZS53aWR0aCYmaS54K2kud2lkdGg+ZS54JiZpLnk8ZS55K2UuaGVpZ2h0JiZpLnkraS5oZWlnaHQ+ZS55JiZ0LmVtaXQoXCJjb2xsaXNpb25EZXRlY3RlZFwiLHtzdWJqZWN0OmksdGFyZ2V0OmV9KX0pfSl9KX07Y2xhc3MgcHtjb25zdHJ1Y3Rvcih0LGUsaSxzKXt0aGlzLng9dHx8MCx0aGlzLnk9ZXx8MCx0aGlzLndpZHRoPWl8fDAsdGhpcy5oZWlnaHQ9c3x8MCx0aGlzLnVwZGF0ZXJzPVtdfXVwZGF0ZSh0KXt0aGlzLnVwZGF0ZXJzLmZvckVhY2goZT0+ZSh0LHRoaXMpKX19Y2xhc3MgZiBleHRlbmRzIHB7Y29uc3RydWN0b3IodCxlLGkscyl7c3VwZXIoMCwwLGUsaSksdGhpcy5pbWFnZT10LHMmJih0aGlzLnNjcm9sbE9wdGlvbnM9cyksdGhpcy51cGRhdGVycy5wdXNoKHRoaXMuZHJhd0JhY2tncm91bmQuYmluZCh0aGlzKSl9ZHJhd0JhY2tncm91bmQodCl7aWYodGhpcy5zY3JvbGxPcHRpb25zKXtjb25zdHtzcGVlZDplLGRpcmVjdGlvbjppfT10aGlzLnNjcm9sbE9wdGlvbnM7dGhpcy5zY3JvbGxWYWx1ZT10aGlzLnNjcm9sbFZhbHVlfHwwO2NvbnN0IHM9dC5zY2FsZXIodC53aWR0aCk7dGhpcy5zY3JvbGxWYWx1ZT49cyYmKHRoaXMuc2Nyb2xsVmFsdWU9MCksOTA9PT1pPyh0aGlzLnNjcm9sbFZhbHVlPXRoaXMuc2Nyb2xsVmFsdWUrPWUsdC5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsTWF0aC5yb3VuZCh0aGlzLnNjcm9sbFZhbHVlLXMpLDAsdC5zY2FsZXIodGhpcy53aWR0aCksdC5zY2FsZXIodGhpcy5oZWlnaHQpKSx0LmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSxNYXRoLnJvdW5kKHRoaXMuc2Nyb2xsVmFsdWUpLDAsdC5zY2FsZXIodGhpcy53aWR0aCksdC5zY2FsZXIodGhpcy5oZWlnaHQpKSk6MjcwPT09aSYmKHRoaXMuc2Nyb2xsVmFsdWUtPWUsdC5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsTWF0aC5yb3VuZCh0aGlzLnNjcm9sbFZhbHVlK3MpLDAsdC5zY2FsZXIodGhpcy53aWR0aCksdC5zY2FsZXIodGhpcy5oZWlnaHQpKSx0LmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSxNYXRoLnJvdW5kKHRoaXMuc2Nyb2xsVmFsdWUpLDAsdC5zY2FsZXIodGhpcy53aWR0aCksdC5zY2FsZXIodGhpcy5oZWlnaHQpKSl9ZWxzZSB0LmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwwLDAsdC5zY2FsZXIodGhpcy53aWR0aCksdC5zY2FsZXIodGhpcy5oZWlnaHQpKX19Y2xhc3MgZyBleHRlbmRzIHB7Y29uc3RydWN0b3IodCxlLGkscyxoKXtzdXBlcihlLGkscyxoKSx0aGlzLmltYWdlPXQsdGhpcy5zV2lkdGg9cyx0aGlzLnNIZWlnaHQ9aCx0aGlzLnJlcGVhdD0hMSx0aGlzLmZyYW1lcz1NYXRoLnJvdW5kKHQud2lkdGgvcyksdGhpcy5zcGVlZD0wLHRoaXMuY3VycmVudEZyYW1lPTAsdGhpcy51cGRhdGVycy5wdXNoKHRoaXMuZHJhd1Nwcml0ZXNoZWV0SW1hZ2UuYmluZCh0aGlzKSksby5iaW5kKHRoaXMpKCl9ZHJhd1Nwcml0ZXNoZWV0SW1hZ2UodCl7aWYodGhpcy5jdXJyZW50RnJhbWU+PXRoaXMuZnJhbWVzKXJldHVybiB2b2lkIHRoaXMuZW1pdChcImRvbmVcIix0aGlzKTt0aGlzLmN1cnJlbnRGcmFtZT49dGhpcy5mcmFtZXMmJnRoaXMucmVwZWF0JiYodGhpcy5jdXJyZW50RnJhbWU9MCx0aGlzLmVtaXQoXCJyZXBlYXRcIix0aGlzKSksdC5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsdGhpcy5jdXJyZW50RnJhbWUqdGhpcy53aWR0aCwwLHRoaXMuc1dpZHRoLHRoaXMuc0hlaWdodCx0LnNjYWxlcih0aGlzLngpLHQuc2NhbGVyKHRoaXMueSksdC5zY2FsZXIodGhpcy53aWR0aCksdC5zY2FsZXIodGhpcy5oZWlnaHQpKSx0aGlzLnNwZWVkPXRoaXMuc3BlZWQrLjE7Y29uc3QgZT1NYXRoLnJvdW5kKHRoaXMuc3BlZWQpO3RoaXMuY3VycmVudEZyYW1lKz1lLDE9PT1lJiYodGhpcy5zcGVlZD0wKX19Y2xhc3MgdyBleHRlbmRzIHB7Y29uc3RydWN0b3IodCxlLGkscyxoKXtzdXBlcihlLGkpLGEuYmluZCh0aGlzKSgpLHIuYmluZCh0aGlzKSh0LHN8fHQud2lkdGgsaHx8dC5oZWlnaHQpfX1jbGFzcyBiIGV4dGVuZHMgcHtjb25zdHJ1Y3Rvcih0KXtzdXBlcigwLDApLHRoaXMudXBkYXRlcnMucHVzaCh0KX19Y29uc3QgeT0odCxlKT0+TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihlLXQrMSkpK3QseD17YmFja3NwYWNlOjgsdGFiOjksZW50ZXI6MTMsc2hpZnRsZWZ0OjE2LHNoaWZ0cmlnaHQ6MTYsY3RybGxlZnQ6MTcsY3RybHJpZ2dodDoxNyxhbHRsZWZ0OjE4LGFsdHJpZ2h0OjE4LHBhdXNlOjE5LGNhcHNsb2NrOjIwLGVzY2FwZToyNyxzcGFjZTozMixwYWdldXA6MzMscGFnZWRvd246MzQsZW5kOjM1LGhvbWU6MzYsYXJyb3dsZWZ0OjM3LGFycm93dXA6MzgsYXJyb3dyaWdodDozOSxhcnJvd2Rvd246NDAsaW5zZXJ0OjQ1LGRlbGV0ZTo0NiwwOjQ4LDE6NDksMjo1MCwzOjUxLDQ6NTIsNTo1Myw2OjU0LDc6NTUsODo1Niw5OjU3LGE6NjUsYjo2NixjOjY3LGQ6NjgsZTo2OSxmOjcwLGc6NzEsaDo3MixpOjczLGo6NzQsazo3NSxsOjc2LG06Nzcsbjo3OCxvOjc5LHA6ODAscTo4MSxyOjgyLHM6ODMsdDo4NCx1Ojg1LHY6ODYsdzo4Nyx4Ojg4LHk6ODksejo5MCxtZXRhbGVmdDo5MSxtZXRhcmlnaHQ6OTIsc2VsZWN0OjkzLG51bXBhZDA6OTYsbnVtcGFkMTo5NyxudW1wYWQyOjk4LG51bXBhZDM6OTksbnVtcGFkNDoxMDAsbnVtcGFkNToxMDEsbnVtcGFkNjoxMDIsbnVtcGFkNzoxMDMsbnVtcGFkODoxMDQsbnVtcGFkOToxMDUsbnVtcGFkbXVsdGlwbHk6MTA2LG51bXBhZGFkZDoxMDcsbnVtcGFkc3VidHJhY3Q6MTA5LG51bXBhZGRlY2ltYWw6MTEwLG51bXBhZGRpdmlkZToxMTEsZjE6MTEyLGYyOjExMyxmMzoxMTQsZjQ6MTE1LGY1OjExNixmNjoxMTcsZjc6MTE4LGY4OjExOSxmOToxMjAsZjEwOjEyMSxmMTE6MTIyLGYxMjoxMjMsbnVtbG9jazoxNDQsc2Nyb2xsbG9jazoxNDUsc2VtaWNvbG9uOjE4NixlcXVhbHNpZ246MTg3LGNvbW1hOjE4OCxtaW51czoxODkscGVyaW9kOjE5MCxzbGFzaDoxOTEsYmFja3F1b3RlOjE5MixicmFja2V0bGVmdDoyMTksYmFja3NsYXNoOjIyMCxicmFrZXRyaWdodDoyMjEscXVvdGU6MjIyfTtpLmQoZSxcIkdhbWVXb3JsZFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGN9KSxpLmQoZSxcIm1peGluc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHN9KSxpLmQoZSxcIm9iamVjdHNcIixmdW5jdGlvbigpe3JldHVybiBofSksaS5kKGUsXCJ1dGlsc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIG59KTtlLmRlZmF1bHQ9e0dhbWVXb3JsZDpjLG1peGluczpzLG9iamVjdHM6aCx1dGlsczpufX1dKX0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHdlZWRlZS5qcy5tYXAiLCJpbXBvcnQgeyBHYW1lV29ybGQsIHV0aWxzLCBvYmplY3RzIH0gZnJvbSAndHdlZWRlZSc7XG5pbXBvcnQgeyBTcGFjZXNoaXAsIExhc2VyLCBTY29yZWJvYXJkLCBBc3Ryb2lkLCBFeGVyY2lzZXMgfSBmcm9tICcuL29iamVjdHMnO1xuXG5jb25zdCBrZXlDb2RlVG9EaXJlY3Rpb25NYXAgPSB7XG4gIFt1dGlscy5rZXlDb2Rlcy5hcnJvd3VwXTogMCxcbiAgW3V0aWxzLmtleUNvZGVzLmFycm93ZG93bl06IDE4MCxcbn07XG5cbmNvbnN0IHdvcmxkID0gbmV3IEdhbWVXb3JsZCgnI2NvbnRhaW5lcicsIHtcbiAgcmVzb3VyY2VzOiBbXG4gICAgeyB0eXBlOiAnaW1hZ2UnLCBuYW1lOiAnYmFja2dyb3VuZCcsIHNyYzogJ3N0YXRpYy9iYWNrZ3JvdW5kLnBuZycgfSxcbiAgICB7IHR5cGU6ICdpbWFnZScsIG5hbWU6ICdzcGFjZXNoaXAnLCBzcmM6ICdzdGF0aWMvc3BhY2VzaGlwLnBuZycgfSxcbiAgICB7IHR5cGU6ICdpbWFnZScsIG5hbWU6ICdhc3Ryb2lkMScsIHNyYzogJ3N0YXRpYy9hc3Ryb2lkXzEucG5nJyB9LFxuICAgIHsgdHlwZTogJ2ltYWdlJywgbmFtZTogJ2Rhc2hib2FyZCcsIHNyYzogJ3N0YXRpYy9kYXNoYm9hcmQucG5nJyB9LFxuICAgIHsgdHlwZTogJ2ltYWdlJywgbmFtZTogJ2V4cGxvc2lvbnNwcml0ZXNoZWV0Jywgc3JjOiAnc3RhdGljL2V4cGxvc2lvbi5wbmcnIH0sXG4gICAgeyB0eXBlOiAnc291bmQnLCBuYW1lOiAnc2hvb3QnLCBzcmM6ICdzdGF0aWMvc2hvb3Qud2F2JyB9LFxuICAgIHsgdHlwZTogJ3NvdW5kJywgbmFtZTogJ2V4cGxvc2lvbicsIHNyYzogJ3N0YXRpYy9leHBsb3Npb24ud2F2JyB9LFxuICAgIHsgdHlwZTogJ3NvdW5kJywgbmFtZTogJ2NyYXNoJywgc3JjOiAnc3RhdGljL2NyYXNoLndhdicgfSxcbiAgXSxcbiAgZW5hYmxlQ29sbGlzaW9uRGV0ZWN0aW9uOiB0cnVlLFxufSk7XG5cbmxldCBfc3BhY2VzaGlwLCBfc2NvcmVib2FyZCwgX2V4ZXJjaXNlcyA9IG51bGw7XG5cbndvcmxkLm9uKCdrZXlkb3duJywgKGtleUNvZGUpID0+IHtcbiAgaWYgKF9zcGFjZXNoaXApIHtcbiAgICBoYW5kbGVBcnJvd0tleXMoa2V5Q29kZSwgX3NwYWNlc2hpcCk7XG4gICAgaGFuZGxlU2hvb3RMYXNlcihrZXlDb2RlLCBfc3BhY2VzaGlwKTtcbiAgfVxuICBoYW5kbGVSZXN0YXJ0R2FtZShrZXlDb2RlKTtcbn0pO1xuXG5jb25zdCBoYW5kbGVBcnJvd0tleXMgPSAoa2V5Q29kZSwgc3BhY2VzaGlwKSA9PiB7XG4gIGNvbnN0IGRpcmVjdGlvbiA9IGtleUNvZGVUb0RpcmVjdGlvbk1hcFtrZXlDb2RlXTtcbiAgTnVtYmVyLmlzSW50ZWdlcihkaXJlY3Rpb24pICYmIHNwYWNlc2hpcC5tb3ZlKGRpcmVjdGlvbiwgOCwgeyBlYXNlSW46IHRydWUgfSk7XG59O1xuXG53b3JsZC5vbigna2V5dXAnLCAoa2V5Q29kZSkgPT4ge1xuICBjb25zdCBkaXJlY3Rpb24gPSBrZXlDb2RlVG9EaXJlY3Rpb25NYXBba2V5Q29kZV07XG4gIE51bWJlci5pc0ludGVnZXIoZGlyZWN0aW9uKSAmJiBfc3BhY2VzaGlwLnN0b3AoKTtcbn0pO1xuXG5jb25zdCBoYW5kbGVTaG9vdExhc2VyID0gKGtleUNvZGUsIHNwYWNlc2hpcCkgPT4ge1xuICBpZiAoa2V5Q29kZSA9PT0gdXRpbHMua2V5Q29kZXMuc3BhY2UpIHtcbiAgICB3b3JsZC5pbnNlcnQobmV3IExhc2VyKChzcGFjZXNoaXAueCArIChzcGFjZXNoaXAud2lkdGgpKSwgKHNwYWNlc2hpcC55ICsgKHNwYWNlc2hpcC5oZWlnaHQgLyAyKSkpKTtcbiAgICB3b3JsZC5nZXRSZXNvdXJjZSgnc2hvb3QnKS5wbGF5KCk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZVJlc3RhcnRHYW1lID0gKGtleUNvZGUpID0+IHtcbiAgaWYgKGtleUNvZGUgPT09IHV0aWxzLmtleUNvZGVzLmVudGVyICYmICh3b3JsZC5pc0dhbWVPdmVyIHx8ICF3b3JsZC5zdGFydGVkKSkge1xuICAgIHN0YXJ0VGhlR2FtZSgpO1xuICB9XG59O1xuXG53b3JsZC5vbignY29sbGlzaW9uRGV0ZWN0ZWQnLCAoeyBzdWJqZWN0LCB0YXJnZXQgfSkgPT4ge1xuICBjb25zdCBhZGRFeHBsb3Npb25UbyA9ICh4LCB5LCBjYikgPT4ge1xuICAgIGNvbnN0IGV4cGxvc2lvbiA9IG5ldyBvYmplY3RzLlNwcml0ZVNoZWV0SW1hZ2VPYmplY3Qod29ybGQuZ2V0UmVzb3VyY2UoJ2V4cGxvc2lvbnNwcml0ZXNoZWV0JyksIHgsIHksIDE0MiwgMjAwKTtcbiAgICBleHBsb3Npb24uZnJhbWVzID0gODtcbiAgICBleHBsb3Npb24ub24oJ2RvbmUnLCAoKSA9PiB7XG4gICAgICB3b3JsZC5yZW1vdmUoZXhwbG9zaW9uKTtcbiAgICAgIGNiICYmIGNiKCk7XG4gICAgfSk7XG4gICAgd29ybGQuaW5zZXJ0KGV4cGxvc2lvbik7XG4gIH1cbiAgXG4gIFxuICBpZiAoKHN1YmplY3QgaW5zdGFuY2VvZiBTcGFjZXNoaXAgJiYgdGFyZ2V0IGluc3RhbmNlb2YgQXN0cm9pZCkgfHxcbiAgICAoc3ViamVjdCBpbnN0YW5jZW9mIFNwYWNlc2hpcCAmJiB0YXJnZXQgaW5zdGFuY2VvZiBMYXNlcikpIHtcbiAgICAgIHdvcmxkLnJlbW92ZShzdWJqZWN0KTtcbiAgICAgIHdvcmxkLmdldFJlc291cmNlKCdjcmFzaCcpLnBsYXkoKTtcbiAgICAgIGFkZEV4cGxvc2lvblRvKHN1YmplY3QueCwgc3ViamVjdC55LCAoKSA9PiB7XG4gICAgICAgIHdvcmxkLmdhbWVPdmVyKCk7XG4gICAgICAgIHdvcmxkLnNob3dQb3B1cCh7XG4gICAgICAgICAgdGl0bGU6ICdHYW1lIG92ZXIhJyxcbiAgICAgICAgICB0ZXh0OiAnRHJ1ayBvcCBkZSBcImVudGVyXCIgdG9ldHMgb20gb3BuaWV1dyB0ZSBiZWdpbm5lbi4nLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG4gIFxuICBpZiAoKHN1YmplY3QgaW5zdGFuY2VvZiBMYXNlciAmJiB0YXJnZXQgaW5zdGFuY2VvZiBBc3Ryb2lkKSkge1xuICAgIGlmICh0YXJnZXQuYW5zd2VyID09PSBfZXhlcmNpc2VzLmFuc3dlcikge1xuICAgICAgd29ybGQuZ2V0UmVzb3VyY2UoJ2V4cGxvc2lvbicpLnBsYXkoKTtcbiAgICAgIFxuICAgICAgYWRkRXhwbG9zaW9uVG8odGFyZ2V0LngsIHRhcmdldC55KTtcbiAgICAgIFxuICAgICAgd29ybGQucmVtb3ZlKHRhcmdldCk7XG4gICAgICB3b3JsZC5yZW1vdmUoc3ViamVjdCk7XG4gICAgICB3b3JsZC5nYW1lT2JqZWN0cy5maWx0ZXIoZ28gPT4gZ28gaW5zdGFuY2VvZiBBc3Ryb2lkKS5mb3JFYWNoKGdvID0+IHtcbiAgICAgICAgZ28ubW92ZShnby5kaXJlY3Rpb24sIGdvLmZ1bGxTcGVlZCk7XG4gICAgICB9KTtcbiAgICAgIF9zY29yZWJvYXJkLmFkZCgxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YmplY3QubW92ZSgyNzAsIChzdWJqZWN0LnNwZWVkICogMS41KSk7XG4gICAgICB0YXJnZXQubW92ZSgyNzAsIHRhcmdldC5mdWxsU3BlZWQpO1xuICAgIH1cbiAgfVxufSk7XG5cbndvcmxkLm9uKCdhZnRlckdhbWVMb29wJywgKCkgPT4ge1xuICBjb25zdCBhc3Ryb2lkcyA9IHdvcmxkLmdhbWVPYmplY3RzLmZpbHRlcihnbyA9PiBnbyBpbnN0YW5jZW9mIEFzdHJvaWQpO1xuICBpZiAoYXN0cm9pZHMubGVuZ3RoID09PSAwKSB7XG4gICAgaW5zZXJ0QXN0cm9pZHMoKTtcbiAgfSBlbHNlIHtcbiAgICBhc3Ryb2lkcy5maWx0ZXIoYXN0cm9pZCA9PiBhc3Ryb2lkLnggPCAwIC0gKGFzdHJvaWQud2lkdGggKiAyKSkuZm9yRWFjaChhc3Ryb2lkID0+IHdvcmxkLnJlbW92ZShhc3Ryb2lkKSk7XG4gIH1cbiAgd29ybGQuZ2FtZU9iamVjdHMuZmlsdGVyKGdvID0+IGdvIGluc3RhbmNlb2YgTGFzZXIgJiYgKGdvLnggKyBnby53aWR0aCkgPiB3b3JsZC53aWR0aCkuZm9yRWFjaChsYXNlciA9PiB3b3JsZC5yZW1vdmUobGFzZXIpKTtcbn0pO1xuXG5jb25zdCBpbnNlcnRBc3Ryb2lkcyA9ICgpID0+IHtcbiAgY29uc3QgeSA9IHdvcmxkLmhlaWdodCAvIDM7XG4gIF9leGVyY2lzZXMuY3JlYXRlTmV3KCk7XG4gIGNvbnN0IGFuc3dlcnMgPSBfZXhlcmNpc2VzLmdldFJhbmRvbUFuc3dlcnMoKTtcbiAgY29uc3QgYXN0cm9pZDEgPSBuZXcgQXN0cm9pZCh3b3JsZC5nZXRSZXNvdXJjZSgnYXN0cm9pZDEnKSwod29ybGQud2lkdGggLSB1dGlscy5nZXRSYW5kb21JbnQoMTMwLCAxNzApKSwgKCh5ICogMSkgLyAyKSAtIDc1LCBhbnN3ZXJzWzBdKTtcbiAgY29uc3QgYXN0cm9pZDIgPSBuZXcgQXN0cm9pZCh3b3JsZC5nZXRSZXNvdXJjZSgnYXN0cm9pZDEnKSwgKHdvcmxkLndpZHRoIC0gdXRpbHMuZ2V0UmFuZG9tSW50KDEzMCwgMTcwKSksICgoeSAqIDIpIC8gMiksIGFuc3dlcnNbMV0pO1xuICBjb25zdCBhc3Ryb2lkMyA9IG5ldyBBc3Ryb2lkKHdvcmxkLmdldFJlc291cmNlKCdhc3Ryb2lkMScpLCAod29ybGQud2lkdGggLSB1dGlscy5nZXRSYW5kb21JbnQoMTMwLCAxNzApKSwgKCh5ICogMykgLyAyKSArIDc1LCBhbnN3ZXJzWzJdKTtcblxuICB3b3JsZC5pbnNlcnQoYXN0cm9pZDEpO1xuICB3b3JsZC5pbnNlcnQoYXN0cm9pZDIpO1xuICB3b3JsZC5pbnNlcnQoYXN0cm9pZDMpO1xufVxuXG5jb25zdCBzdGFydFRoZUdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHNwYWNlc2hpcCA9IG5ldyBTcGFjZXNoaXAod29ybGQuZ2V0UmVzb3VyY2UoJ3NwYWNlc2hpcCcpLCAxMDAsICh3b3JsZC5oZWlnaHQgLyAyKSk7XG4gIHNwYWNlc2hpcC5zZXRCb3VuZGFyaWVzKDQwLCB3b3JsZC53aWR0aCwgd29ybGQuaGVpZ2h0IC0gMTIwLCAwKTtcbiAgXG4gIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgb2JqZWN0cy5CYWNrZ3JvdW5kKHdvcmxkLmdldFJlc291cmNlKCdiYWNrZ3JvdW5kJyksIHdvcmxkLndpZHRoLCB3b3JsZC5oZWlnaHQpO1xuICBjb25zdCBzY29yZWJvYXJkID0gbmV3IFNjb3JlYm9hcmQod29ybGQuZ2V0UmVzb3VyY2UoJ2Rhc2hib2FyZCcpLCAwLCB3b3JsZC5oZWlnaHQgLSAxMjApO1xuICBjb25zdCBleGVyY2lzZXMgPSBuZXcgRXhlcmNpc2VzKCk7XG4gIFxuICBfc2NvcmVib2FyZCA9IHNjb3JlYm9hcmQ7XG4gIF9zcGFjZXNoaXAgPSBzcGFjZXNoaXA7XG4gIF9leGVyY2lzZXMgPSBleGVyY2lzZXM7XG5cbiAgd29ybGQuY2xvc2VQb3B1cCgpO1xuICB3b3JsZC5yZXNldCgpO1xuICB3b3JsZC5pbnNlcnQoYmFja2dyb3VuZCk7XG4gIHdvcmxkLmluc2VydChzY29yZWJvYXJkKTtcbiAgd29ybGQuaW5zZXJ0KGV4ZXJjaXNlcyk7XG4gIHdvcmxkLmluc2VydChzcGFjZXNoaXApO1xuICB3b3JsZC5zdGFydCgpO1xufTtcblxud29ybGQuc2hvd1BvcHVwKHtcbiAgdGl0bGU6ICdLbGFhciBvbSB0ZSBiZWdpbm5lbj8nLFxuICB0ZXh0OiBbICdEcnVrIGRhbiBvcCBkZSBcImVudGVyXCIgdG9ldHMuIDxiciAvPjxiciAvPicsXG4gICAgICAgICAgJ0dlYnJ1aWsgZGUgcGlqbHRqZXMgdG9ldHNlbiBvbSBqZSBydWltdGVzY2hpcCB0ZSBiZXN0dXJlbiBlbiBkZSBzcGF0aWViYWxrIG9tIGVlbiByb3RzIHRlIHNjaGlldGVuPGJyIC8+PGJyIC8+JyxcbiAgICAgICAgICAnRGl0IHNwZWwgaXMgZ2VtYWFrdCBkb29yOiA8YnIgLz4nLFxuICAgICAgICAgICdSb25hbGQgdmFuIGRlciBLb29paiAmIFRoaWpzIHZhbiBkZXIgS29vaWonXG4gICAgICAgIF0uam9pbignICcpLFxufSk7IiwiaW1wb3J0IHsgb2JqZWN0cywgbWl4aW5zLCB1dGlscyB9IGZyb20gJ3R3ZWVkZWUnO1xuXG5leHBvcnQgY2xhc3MgTGFzZXIgZXh0ZW5kcyBvYmplY3RzLkdhbWVPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgc3VwZXIoeCwgeSwgMjAsIDUpO1xuICAgIG1peGlucy5hZGRNb3ZlbWVudC5iaW5kKHRoaXMpKCk7XG4gICAgdGhpcy51cGRhdGVycy5wdXNoKHRoaXMuZHJhd0xhc2VyLmJpbmQodGhpcykpO1xuICAgIHRoaXMubW92ZSg5MCwgMTUpO1xuICB9XG5cbiAgZHJhd0xhc2VyKHdvcmxkKSB7XG4gICAgd29ybGQuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHdvcmxkLmN0eC5tb3ZlVG8od29ybGQuc2NhbGVyKHRoaXMueCksIHdvcmxkLnNjYWxlcih0aGlzLnkpKTtcbiAgICB3b3JsZC5jdHgubGluZVRvKHdvcmxkLnNjYWxlcih0aGlzLngpICsgdGhpcy53aWR0aCwgd29ybGQuc2NhbGVyKHRoaXMueSkpO1xuICAgIHdvcmxkLmN0eC5zdHJva2VTdHlsZSA9IFwiI0ZGMDAwMFwiO1xuICAgIHdvcmxkLmN0eC5saW5lV2lkdGggPSB0aGlzLmhlaWdodDtcbiAgICB3b3JsZC5jdHguc3Ryb2tlKCk7IFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3Ryb2lkIGV4dGVuZHMgb2JqZWN0cy5JbWFnZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKGltYWdlLCB4LCB5LCBhbnN3ZXIpIHtcbiAgICBzdXBlcihpbWFnZSwgeCwgeSk7XG4gICAgdGhpcy5hbnN3ZXIgPSBhbnN3ZXI7XG4gICAgbWl4aW5zLmFkZE1vdmVtZW50LmJpbmQodGhpcykoKTtcbiAgICB0aGlzLnVwZGF0ZXJzLnB1c2godGhpcy5kcmF3QW5zd2VyLmJpbmQodGhpcykpO1xuICAgIHRoaXMubW92ZSgyNzAsIDEpO1xuICAgIHRoaXMuZnVsbFNwZWVkID0gMztcbiAgfVxuXG4gIGRyYXdBbnN3ZXIod29ybGQpIHtcbiAgICB3b3JsZC5jdHguZm9udCA9IGAke3dvcmxkLnNjYWxlcig0MCl9cHggQXJpYWxgO1xuICAgIHdvcmxkLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIHdvcmxkLmN0eC5maWxsVGV4dCh0aGlzLmFuc3dlciwgd29ybGQuc2NhbGVyKHRoaXMueCArIDUwKSwgd29ybGQuc2NhbGVyKHRoaXMueSArIDg1KSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNwYWNlc2hpcCBleHRlbmRzIG9iamVjdHMuSW1hZ2VPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihpbWFnZSwgd2lkdGgsIGhlaWdodCwgeCwgeSkge1xuICAgIHN1cGVyKGltYWdlLCB3aWR0aCwgaGVpZ2h0LCB4LCB5KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2NvcmVib2FyZCBleHRlbmRzIG9iamVjdHMuSW1hZ2VPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihpbWFnZSwgd2lkdGgsIGhlaWdodCwgeCwgeSkge1xuICAgIHN1cGVyKGltYWdlLCB3aWR0aCwgaGVpZ2h0LCB4LCB5KTtcbiAgICB0aGlzLnVwZGF0ZXJzLnB1c2godGhpcy5kcmF3U2NvcmVib2FyZC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgfVxuXG4gIGFkZCAoc2NvcmUpIHtcbiAgICB0aGlzLnNjb3JlICs9IHNjb3JlO1xuICB9XG5cbiAgZHJhd1Njb3JlYm9hcmQgKHdvcmxkKSB7XG4gICAgd29ybGQuY3R4LnNhdmUoKTtcbiAgICB3b3JsZC5jdHguZm9udCA9IGAke3dvcmxkLnNjYWxlcigzMCl9cHggQXJpYWxgO1xuICAgIHdvcmxkLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIHdvcmxkLmN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjsgXG4gICAgXG4gICAgd29ybGQuY3R4LmZpbGxUZXh0KCdTY29yZTogICcgKyB0aGlzLnNjb3JlLCB3b3JsZC5zY2FsZXIoMjApLCB3b3JsZC5zY2FsZXIoMzApKTtcblxuICAgIC8vIHdvcmxkLmN0eC5maWxsVGV4dCgnTGV2ZW5zOicsIHdvcmxkLnNjYWxlcigxMjApLCB3b3JsZC5zY2FsZXIod29ybGQuaGVpZ2h0IC0gNDUpKTtcbiAgICAvLyB3b3JsZC5jdHguZmlsbFRleHQoXCIxXCIsIHdvcmxkLnNjYWxlcigzNTApLCB3b3JsZC5zY2FsZXIod29ybGQuaGVpZ2h0IC0gNDUpKTtcblxuICAgIHdvcmxkLmN0eC5yZXN0b3JlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4ZXJjaXNlcyBleHRlbmRzIG9iamVjdHMuR2FtZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICBzdXBlciAoeCwgeSk7XG4gICAgdGhpcy51cGRhdGVycy5wdXNoKHRoaXMudXBkYXRlRXhlcmNpc2UuYmluZCh0aGlzKSk7XG4gICAgdGhpcy50ZXh0ID0gXCJcIjtcbiAgICB0aGlzLmFuc3dlciA9IG51bGw7XG4gIH1cblxuICBjcmVhdGVOZXcgKCkge1xuICAgIGNvbnN0IGEgPSB1dGlscy5nZXRSYW5kb21JbnQoMSwgMTApO1xuICAgIGNvbnN0IGIgPSB1dGlscy5nZXRSYW5kb21JbnQoMSwgMTApO1xuICAgIHRoaXMuYSA9IGE7XG4gICAgdGhpcy5iID0gYjtcbiAgICB0aGlzLnRleHQgPSBhICsgJyB4ICcgKyBiO1xuICAgIHRoaXMuYW5zd2VyID0gYSAqIGI7XG4gIH1cblxuICBnZXRSYW5kb21BbnN3ZXJzICgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXkoMyk7XG4gICAgY29uc3QgcG9zaXRpb24gPSB1dGlscy5nZXRSYW5kb21JbnQoMCwgMik7XG4gICAgcmVzdWx0W3Bvc2l0aW9uXSA9IHRoaXMuYW5zd2VyO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPD0gMjsgaW5kZXgrKykge1xuICAgICAgaWYgKGluZGV4ICE9PSBwb3NpdGlvbikge1xuICAgICAgICBsZXQgYiA9IHV0aWxzLmdldFJhbmRvbUludCgxLCAxMCk7XG4gICAgICAgIHdoaWxlIChiID09PSB0aGlzLmIpIHtcbiAgICAgICAgICBiID0gdXRpbHMuZ2V0UmFuZG9tSW50KDEsIDEwKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRbaW5kZXhdID0gdGhpcy5hICogYjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDsgICAgXG4gIH1cblxuICB1cGRhdGVFeGVyY2lzZSh3b3JsZCkge1xuICAgIHdvcmxkLmN0eC5zYXZlKCk7XG4gICAgd29ybGQuY3R4LmZvbnQgPSBgJHt3b3JsZC5zY2FsZXIoNjApfXB4IEFyaWFsYDtcbiAgICB3b3JsZC5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICB3b3JsZC5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgXG4gICAgd29ybGQuY3R4LmZpbGxUZXh0KCdTb206Jywgd29ybGQuc2NhbGVyKDI4MCksIHdvcmxkLnNjYWxlcih3b3JsZC5oZWlnaHQgLSA0MCkpO1xuICAgIHdvcmxkLmN0eC5maWxsVGV4dCh0aGlzLnRleHQsIHdvcmxkLnNjYWxlcig1MTApLCB3b3JsZC5zY2FsZXIod29ybGQuaGVpZ2h0IC0gNDApKTtcbiAgICB3b3JsZC5jdHgucmVzdG9yZSgpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==