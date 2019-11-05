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

!function(t,e){if(true)module.exports=e();else { var s, i; }}(window,function(){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var s={};i.r(s),i.d(s,"Background",function(){return u}),i.d(s,"Dimensions",function(){return d}),i.d(s,"GameObject",function(){return l}),i.d(s,"Point",function(){return a}),i.d(s,"SpriteSheetObject",function(){return m});var n={};i.r(n),i.d(n,"getRandomInt",function(){return p}),i.d(n,"isCollision",function(){return f}),i.d(n,"keyCodes",function(){return g});var o={};i.r(o),i.d(o,"collisions",function(){return E}),i.d(o,"eventEmitter",function(){return r}),i.d(o,"createImageBehaviour",function(){return k}),i.d(o,"movement",function(){return j});var r=function(){this.listeners={},this.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},this.emit=function(t,e){this.listeners[t]&&this.listeners[t].forEach(t=>{t(e)})}};class h{constructor(t,e){if(void 0===t||void 0===e)throw new Error("x of y should be set for a Point object");this.x=t||0,this.y=e||0}static none(){return new h(0,0)}}var a=h;class c{constructor(t,e){if(void 0===t||void 0===e)throw new Error("Width of Height should be set for a Dimensions object");this.width=t||0,this.height=e||0}static none(){return new c(0,0)}}var d=c;var l=class{constructor(t,e,i){if(!t instanceof a)throw new Error("point should be an instance of Point");if(!e instanceof d)throw new Error("dimensions should be an instance of Dimensions");this.point=t||a.none(),this.dimensions=e||d.none(),this.updaters=[],r.bind(this)(),i&&i.forEach(t=>this.addBehaviour(t))}addBehaviour(t){t.bind(this)()}update(t){this.emit("beforeUpdate"),this.updaters.forEach(e=>e(t,this)),this.emit("afterUpdate")}};var u=class extends l{constructor(t,e,i){super(a.none(),e),this.image=t,i&&(this.scrollOptions=i),this.updaters.push(this.drawBackground.bind(this))}drawBackground(t){if(this.scrollOptions){const{speed:e,direction:i}=this.scrollOptions;this.scrollValue=this.scrollValue||0;const s=t.scaler(t.dimensions.width);this.scrollValue>=s&&(this.scrollValue=0),90===i?(this.scrollValue=this.scrollValue+=e,t.ctx.drawImage(this.image,Math.round(this.scrollValue-s),0,t.scaler(this.dimensionswidth),t.scaler(this.dimensions.height)),t.ctx.drawImage(this.image,Math.round(this.scrollValue),0,t.scaler(this.dimensions.width),t.scaler(this.dimensions.height))):270===i&&(this.scrollValue-=e,t.ctx.drawImage(this.image,Math.round(this.scrollValue+s),0,t.scaler(this.dimensions.width),t.scaler(this.dimensions.height)),t.ctx.drawImage(this.image,Math.round(this.scrollValue),0,t.scaler(this.dimensions.width),t.scaler(this.dimensions.height)))}else t.ctx.drawImage(this.image,0,0,t.scaler(this.dimensions.width),t.scaler(this.dimensions.height))}};var m=class extends l{constructor(t,e,i){super(e,i),this.image=t,this.sWidth=i.width,this.sHeight=i.height,this.repeat=!1,this.frames=Math.round(t.width/i.width),this.speed=0,this.currentFrame=0,this.updaters.push(this.drawSpritesheetImage.bind(this))}drawSpritesheetImage(t){if(this.currentFrame>=this.frames)return;this.currentFrame>=this.frames&&this.repeat&&(this.currentFrame=0),t.ctx.drawImage(this.image,this.currentFrame*this.dimensions.width,0,this.sWidth,this.sHeight,t.scaler(this.point.x),t.scaler(this.point.y),t.scaler(this.dimensions.width),t.scaler(this.dimensions.height)),this.speed=this.speed+.1;const e=Math.round(this.speed);this.currentFrame+=e,1===e&&(this.speed=0)}};const p=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,f=(t,e)=>t.point.x<e.point.x+e.dimensions.width&&t.point.x+t.dimensions.width>e.point.x&&t.point.y<e.point.y+e.dimensions.height&&t.point.y+t.dimensions.height>e.point.y,g={backspace:8,tab:9,enter:13,shiftleft:16,shiftright:16,ctrlleft:17,ctrlrigght:17,altleft:18,altright:18,pause:19,capslock:20,escape:27,space:32,pageup:33,pagedown:34,end:35,home:36,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,insert:45,delete:46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,metaleft:91,metaright:92,select:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,numpadmultiply:106,numpadadd:107,numpadsubtract:109,numpaddecimal:110,numpaddivide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrolllock:145,semicolon:186,equalsign:187,comma:188,minus:189,period:190,slash:191,backquote:192,bracketleft:219,backslash:220,braketright:221,quote:222};class w{constructor(t,e){this.options=e||{},this.gameObjects=[],this.isGameOver=!1,this.started=!1,this.container=document.querySelector(t),b.bind(this)(this.container,this.options),r.bind(this)(),y.bind(this)(this.container,e),v.bind(this)(),e.enableCollisionDetection&&x.bind(this)()}start(){this.started=!0,this.isGameOver=!1,this.gameLoop()}reset(){this.gameObjects=[]}gameOver(){this.isGameOver=!0}clear(){this.ctx.clearRect(0,0,this.scaler(this.dimensions.width),this.scaler(this.dimensions.height))}gameLoop(){this.isGameOver||(this.emit("beforeGameLoop",this),this.clear(),this.gameObjects.forEach(t=>t.update(this)),this.emit("afterGameLoop",this),window.requestAnimationFrame(()=>{this.gameLoop()}))}insert(t){this.gameObjects.push(t)}remove(t){this.gameObjects=this.gameObjects.filter(e=>e!==t)}showPopup(t){const e=document.createElement("div");e.className="modal",e.style.width=this.scaler(this.width)+"px";const i=document.createElement("div");if(i.className="modal-content",t.title){const e=document.createElement("h1");e.innerHTML=t.title,i.appendChild(e)}if(t.text){const e=document.createElement("div");e.innerHTML=t.text,i.appendChild(e)}t.buttons&&t.buttons.length&&t.buttons.forEach(t=>{const e=document.createElement("button");e.innerHTML=t.text,e.style.padding="16px",e.style.fontWeight="700",e.addEventListener("click",t.onClick),i.appendChild(e)}),e.appendChild(i),this.container.appendChild(e)}closePopup(){const t=this.container.querySelector(".modal");t&&t.parentNode.removeChild(t)}}const b=function(t,e){const i=document.createElement("div");i.style.display="none",e.resources&&(e.resources.filter(t=>"image"===t.type).forEach(t=>{const e=document.createElement("img");e.src=t.src,e.id=t.src,e.dataset.name=t.name,i.append(e)}),e.resources.filter(t=>"sound"===t.type).forEach(t=>{const e=document.createElement("audio");e.src=t.src,e.id=t.src,e.dataset.name=t.name,i.append(e)})),t.appendChild(i),this.getResource=function(t){const e=document.querySelector(`[data-name='${t}']`);if(!e)throw new Error(`Couldn't find resource for: '${t}', please register this as an image resource!`);return"AUDIO"===e.tagName?e.cloneNode():e}},v=function(){this.keysDown=[],window.addEventListener("keydown",t=>{this.keysDown.push(t.keyCode),this.emit("keydown",t.keyCode)}),window.addEventListener("keyup",t=>{this.keydowns=this.keysDown.filter(e=>e!==t.keyCode),this.emit("keyup",t.keyCode)}),this.canvas.addEventListener("mousedown",t=>{this.emit("mousedown",t)}),this.canvas.addEventListener("mouseup",t=>{this.emit("mouseup",t)}),this.canvas.addEventListener("touchstart",t=>{t.preventDefault(),this.emit("touchstart",t)}),this.canvas.addEventListener("touchend",t=>{t.preventDefault(),this.emit("touchend",t)})},y=function(t,e){this.dimensions=new d(e.width||1024,e.height||768),this.calculateDimensions=function(e){const i=window.innerHeight,s=window.innerWidth;s>i?(this.scale=i/this.dimensions.height,t.style.width=this.scaler(this.dimensions.width)+"px",t.style.height=this.scaler(this.dimensions.height)+"px",e.width=this.scaler(this.dimensions.width),e.height=this.scaler(this.dimensions.height)):(this.scale=s/this.dimensions.width,t.style.width=this.scaler(this.dimensions.width)+"px",t.style.height=this.scaler(this.dimensions.height)+"px",e.width=this.scaler(this.dimensions.width),e.height=this.scaler(this.dimensions.height))},this.scaler=function(t){return t*this.scale};const i=document.createElement("canvas");i.className="world",t.appendChild(i),this.calculateDimensions(i),this.ctx=i.getContext("2d"),window.addEventListener("resize",()=>this.calculateDimensions(i)),i.focus(),this.canvas=i},x=function(){this.on("afterGameLoop",t=>{const e=t.gameObjects.filter(t=>t.collisionDetection);e.forEach(i=>{e.filter(t=>t!==i).forEach(e=>{f(i,e)&&t.emit("collisionDetected",{subject:i,target:e})})})})};var E=function(){this.collisionDetection=!0};var k=t=>(function(){this.image=t,this.scaleV=1,this.scaleH=1,this.updateImage=function(t){if(-1===this.scaleV||-1===this.scaleH){const e=-1===this.scaleV?-1*this.point.x:this.point.x,i=-1===this.scaleH?-1*this.point.y:this.point.y;t.ctx.save(),t.ctx.translate(t.scaler(this.dimensions.width),0),t.ctx.scale(this.scaleV,this.scaleH),t.ctx.drawImage(this.image,t.scaler(e),t.scaler(i),t.scaler(this.dimensions.width),t.scaler(this.dimensions.height)),t.ctx.restore()}else t.ctx.drawImage(this.image,t.scaler(this.point.x),t.scaler(this.point.y),t.scaler(this.dimensions.width),t.scaler(this.dimensions.height))},this.updaters.push(this.updateImage.bind(this)),this.flipVertically=function(){this.scaleV=1===this.scaleV?-1:1},this.flipHorizontally=function(){this.scaleH=1===this.scaleH?-1:1}});var j=function(){this.direction=null,this.speed=0,this.easeInValue=0,this.deltaX=0,this.deltaY=0,this.boundaries=null,this.move=function(t,e,i){this.options=i||{},this.direction=t,null!=e&&(this.speed=this.options.easeIn?this.easeInValue:e,this.deltaX=e*Math.cos(t*Math.PI/180),this.deltaY=-e*Math.sin(t*Math.PI/180))},this.stop=function(){this.direction=null,this.speed=0,this.easeInValue=0},this.checkBoundary=(t=>{this.boundaries&&(90===this.direction&&this.point.y-t<=this.boundaries.top&&(this.point.y=this.boundaries.top,this.stop()),270===this.direction&&this.point.y+t+this.dimensions.height>=this.boundaries.bottom&&(this.point.y=this.boundaries.bottom-this.dimensions.height,this.stop()))}),this.updateMovement=function(){Number.isInteger(this.direction)&&(this.options.easeIn&&this.easeInValue<this.speed&&(this.easeInValue+=1),this.checkBoundary(this.speed),this.point.x+=this.deltaX,this.point.y+=this.deltaY)},this.setBoundaries=function(t,e,i,s){this.boundaries={top:t,right:e,bottom:i,left:s}},this.updaters.push(this.updateMovement.bind(this))};i.d(e,"GameWorld",function(){return w}),i.d(e,"behaviours",function(){return o}),i.d(e,"objects",function(){return s}),i.d(e,"utils",function(){return n});e.default={GameWorld:w,behaviours:o,objects:s,utils:n}}])});
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



const isTouchDevice = () => {
  return ('ontouchstart' in window) || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch;
};

const keyCodeToDirectionMap = {
  [tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].keyCodes.arrowup]: 90,
  [tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].keyCodes.arrowdown]: 270,
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

let _spaceship, _scoreboard, _exercises, _touchButtons = null;

const checkWhichButtonPressed = (e) => {
  if (_spaceship && _touchButtons) {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;

    const touchPoint = new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].GameObject(new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Point(x / world.scale, y / world.scale), new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Dimensions(10, 10));
    
    if (tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].isCollision(_touchButtons.upButtonDimensions, touchPoint)) {
      handleArrowKeys(tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].keyCodes.arrowup, _spaceship);
    }
    if (tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].isCollision(_touchButtons.downButtonDimensions, touchPoint)) {
      handleArrowKeys(tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].keyCodes.arrowdown, _spaceship);
    }
    if (tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].isCollision(_touchButtons.shootButtonDimensions, touchPoint)) {
      handleShootLaser(tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].keyCodes.space, _spaceship);
    }
  }
}

world.on('touchstart', checkWhichButtonPressed);

world.on('touchend', () => {
  if (_spaceship) {
    _spaceship.stop()
  }
});

world.on('keydown', (keyCode) => {
  if (_spaceship) {
    handleArrowKeys(keyCode, _spaceship);
    handleShootLaser(keyCode, _spaceship);
  }
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
    world.insert(new _objects__WEBPACK_IMPORTED_MODULE_1__["Laser"](new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Point((spaceship.point.x + (spaceship.dimensions.width)), (spaceship.point.y + (spaceship.dimensions.height / 2)))));
    world.getResource('shoot').play();
  }
};

world.on('collisionDetected', ({ subject, target }) => {
  const addExplosionTo = (point, cb) => {
    const explosion = new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].SpriteSheetObject(world.getResource('explosionspritesheet'), point, new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Dimensions(142, 200));
    explosion.frames = 8;
    explosion.on('afterUpdate', () => {
      if (explosion.currentFrame >= explosion.frames) {
        world.remove(explosion);
        cb && cb();
      }
    });
    world.insert(explosion);
  }
  
  
  if ((subject instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Spaceship"] && target instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Astroid"]) ||
    (subject instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Spaceship"] && target instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Laser"])) {
      world.remove(subject);
      world.getResource('crash').play();
      addExplosionTo(subject.point, () => {
        world.gameOver();
        world.showPopup({
          title: 'Game over!',
          buttons: [{ text: 'Opnieuw beginnen', onClick: startTheGame }],
        });
      });
  }
  
  if ((subject instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Laser"] && target instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Astroid"])) {
    if (target.answer === _exercises.answer) {
      world.getResource('explosion').play();
      
      addExplosionTo(target.point);
      
      world.remove(target);
      world.remove(subject);
      world.gameObjects.filter(go => go instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Astroid"]).forEach(go => {
        go.move(go.direction, go.fullSpeed);
      });
      _scoreboard.add(10);
    } else {
      subject.move(180, (subject.speed * 1.3));
      target.move(180, target.fullSpeed);
    }
  }
});

world.on('afterGameLoop', () => {
  const astroids = world.gameObjects.filter(go => go instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Astroid"]);
  if (astroids.length === 0) {
    insertAstroids();
  } else {
    astroids.filter(astroid => astroid.point.x < 0 - (astroid.dimensions.width * 2)).forEach(astroid => world.remove(astroid));
  }
  world.gameObjects.filter(go => go instanceof _objects__WEBPACK_IMPORTED_MODULE_1__["Laser"] && (go.point.x + go.dimensions.width) > world.dimensions.width).forEach(laser => world.remove(laser));
});

const insertAstroids = () => {
  const y = world.dimensions.height / 3;
  _exercises.createNew();
  const answers = _exercises.getRandomAnswers();
  const astroid1 = new _objects__WEBPACK_IMPORTED_MODULE_1__["Astroid"](world.getResource('astroid1'), new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Point((world.dimensions.width - tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].getRandomInt(130, 170)), ((y * 1) / 2) - 75), answers[0]);
  const astroid2 = new _objects__WEBPACK_IMPORTED_MODULE_1__["Astroid"](world.getResource('astroid1'), new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Point((world.dimensions.width - tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].getRandomInt(130, 170)), ((y * 2) / 2)), answers[1]);
  const astroid3 = new _objects__WEBPACK_IMPORTED_MODULE_1__["Astroid"](world.getResource('astroid1'), new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Point((world.dimensions.width - tweedee__WEBPACK_IMPORTED_MODULE_0__["utils"].getRandomInt(130, 170)), ((y * 3) / 2) + 75), answers[2]);

  world.insert(astroid1);
  world.insert(astroid2);
  world.insert(astroid3);
}

const startTheGame = () => {
  const spaceship = new _objects__WEBPACK_IMPORTED_MODULE_1__["Spaceship"](world.getResource('spaceship'), new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Point(100, (world.dimensions.height / 2)));
  spaceship.setBoundaries(40, world.dimensions.width, world.dimensions.height - 120, 0);
  
  const background = new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Background(world.getResource('background'), world.dimensions);
  const scoreboard = new _objects__WEBPACK_IMPORTED_MODULE_1__["Scoreboard"](world.getResource('dashboard'), new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Point(0, world.dimensions.height - 120));
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

  if (isTouchDevice()) {
    const touchButtons = new _objects__WEBPACK_IMPORTED_MODULE_1__["TouchButtons"](world.dimensions);
    _touchButtons = touchButtons;
    world.insert(touchButtons);
  }

  world.start();
};

world.showPopup({
  title: 'Klaar om te beginnen?',
  text: [ (isTouchDevice()) ?
          'Gebruik de pijlen om je ruimteschip te besturen en de rode knop om op een rots te schieten' :
          'Gebruik de pijltjes toetsen om je ruimteschip te besturen en de spatiebalk om een rots te schieten',
          '',
        ].join('<br /><br />'),
  buttons: [{ text: 'Start', onClick: startTheGame }],
});





/***/ }),

/***/ "./objects.js":
/*!********************!*\
  !*** ./objects.js ***!
  \********************/
/*! exports provided: Laser, Astroid, Spaceship, Scoreboard, TouchButtons, Exercises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Laser", function() { return Laser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Astroid", function() { return Astroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spaceship", function() { return Spaceship; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scoreboard", function() { return Scoreboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchButtons", function() { return TouchButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exercises", function() { return Exercises; });
/* harmony import */ var tweedee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tweedee */ "../node_modules/tweedee/dist/tweedee.js");
/* harmony import */ var tweedee__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tweedee__WEBPACK_IMPORTED_MODULE_0__);


class Laser extends tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].GameObject {
  constructor(point) {
    super(point, new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Dimensions(20, 5), [tweedee__WEBPACK_IMPORTED_MODULE_0__["behaviours"].movement, tweedee__WEBPACK_IMPORTED_MODULE_0__["behaviours"].collisions]);
    this.updaters.push(this.drawLaser.bind(this));
    this.move(0, 15);
  }

  drawLaser(world) {
    world.ctx.beginPath();
    world.ctx.moveTo(world.scaler(this.point.x), world.scaler(this.point.y));
    world.ctx.lineTo(world.scaler(this.point.x) + this.dimensions.width, world.scaler(this.point.y));
    world.ctx.strokeStyle = "#FF0000";
    world.ctx.lineWidth = this.dimensions.height;
    world.ctx.stroke(); 
  }
}

class Astroid extends tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].GameObject {
  constructor(image, point, answer) {
    super(point, new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Dimensions(image.width, image.height), [
      tweedee__WEBPACK_IMPORTED_MODULE_0__["behaviours"].createImageBehaviour(image),
      tweedee__WEBPACK_IMPORTED_MODULE_0__["behaviours"].movement,
      tweedee__WEBPACK_IMPORTED_MODULE_0__["behaviours"].collisions
    ]);
    this.answer = answer;
    this.updaters.push(this.drawAnswer.bind(this));
    this.fullSpeed = 5;
    this.move(180, 2);
  }

  drawAnswer(world) {
    world.ctx.font = `${world.scaler(40)}px Arial`;
    world.ctx.fillStyle = 'white';
    world.ctx.fillText(this.answer, world.scaler(this.point.x + 50), world.scaler(this.point.y + 85));
  }
}

class Spaceship extends tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].GameObject {
  constructor(image, point) {
    super(point, new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Dimensions(image.width, image.height), [
      tweedee__WEBPACK_IMPORTED_MODULE_0__["behaviours"].createImageBehaviour(image),
      tweedee__WEBPACK_IMPORTED_MODULE_0__["behaviours"].movement,
      tweedee__WEBPACK_IMPORTED_MODULE_0__["behaviours"].collisions
    ]);
  }
}

class Scoreboard extends tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].GameObject {
  constructor(image, point) {
    super(point, tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Dimensions.none(), [
      tweedee__WEBPACK_IMPORTED_MODULE_0__["behaviours"].createImageBehaviour(image),
    ]);
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
    world.ctx.restore();
  }
}

class TouchButtons extends tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].GameObject {
  constructor(worldDimensions) {
    super(tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Point.none());
    this.upButtonDimensions = new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].GameObject(new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Point(20, worldDimensions.height - 160), new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Dimensions(80, 50));
    this.downButtonDimensions = new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].GameObject(new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Point(20, worldDimensions.height - 80), new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Dimensions(80, 50));
    this.shootButtonDimensions = new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].GameObject(
      new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Point(worldDimensions.width - 120, worldDimensions.height - 140),
      new tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].Dimensions(70, 70),
    );
    this.updaters.push(this.updateTouchButtons.bind(this));
  }

  updateUpButton(world) {
    world.ctx.fillStyle = 'grey';
    world.ctx.strokeStyle = "black";
    world.ctx.lineWidth = 3;
    world.ctx.beginPath();

    const { point, dimensions } = this.upButtonDimensions;
    world.ctx.moveTo(world.scaler(point.x + dimensions.width / 2), world.scaler(point.y));
    world.ctx.lineTo(world.scaler(point.x + dimensions.width), world.scaler(point.y + dimensions.height));
    world.ctx.lineTo(world.scaler(point.x), world.scaler(point.y + dimensions.height));
    world.ctx.lineTo(world.scaler(point.x + dimensions.width / 2), world.scaler(point.y));
    world.ctx.stroke();
    world.ctx.fill();
  }

  updateDownButton(world) {
    world.ctx.fillStyle = 'grey';
    world.ctx.strokeStyle = "black";
    world.ctx.lineWidth = 3;
    world.ctx.beginPath();

    const { point, dimensions } = this.downButtonDimensions;
    world.ctx.moveTo(world.scaler(point.x), world.scaler(point.y));
    world.ctx.lineTo(world.scaler(point.x + dimensions.width), world.scaler(point.y));
    world.ctx.lineTo(world.scaler(point.x + (dimensions.width / 2)), world.scaler(point.y + dimensions.height));
    world.ctx.lineTo(world.scaler(point.x), world.scaler(point.y));
    world.ctx.stroke();
    world.ctx.fill();
  }

  updateShootButton(world) {
    world.ctx.fillStyle = '#991a00';
    world.ctx.strokeStyle = "black";
    world.ctx.lineWidth = 3;
    world.ctx.beginPath();

    const { point, dimensions } = this.shootButtonDimensions;
    world.ctx.arc(
      world.scaler(point.x + (dimensions.width / 2)),
      world.scaler(point.y + (dimensions.height / 2)),
      world.scaler(dimensions.width / 2), 0, Math.PI * 2, true
    );
    world.ctx.stroke();
    world.ctx.fill();
  }

  updateTouchButtons(world) {
    world.ctx.save();
    this.updateUpButton(world);
    this.updateDownButton(world);
    this.updateShootButton(world);
    world.ctx.restore();
  }
}

class Exercises extends tweedee__WEBPACK_IMPORTED_MODULE_0__["objects"].GameObject {
  constructor(point) {
    super (point);
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
    world.ctx.fillText('Som:', world.scaler(280), world.scaler(world.dimensions.height - 40));
    world.ctx.fillText(this.text, world.scaler(510), world.scaler(world.dimensions.height - 40));
    world.ctx.restore();
  }
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map