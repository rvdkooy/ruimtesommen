!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=1)}([function(t,e,s){window,t.exports=function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);var i={};s.r(i),s.d(i,"Background",function(){return u}),s.d(i,"Dimensions",function(){return d}),s.d(i,"GameObject",function(){return l}),s.d(i,"Point",function(){return c}),s.d(i,"SpriteSheetObject",function(){return m});var n={};s.r(n),s.d(n,"getRandomInt",function(){return p}),s.d(n,"isCollision",function(){return f}),s.d(n,"keyCodes",function(){return w});var o={};s.r(o),s.d(o,"collisions",function(){return j}),s.d(o,"eventEmitter",function(){return r}),s.d(o,"createImageBehaviour",function(){return k}),s.d(o,"movement",function(){return O});var r=function(){this.listeners={},this.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},this.emit=function(t,e){this.listeners[t]&&this.listeners[t].forEach(t=>{t(e)})}};class a{constructor(t,e){if(void 0===t||void 0===e)throw new Error("x of y should be set for a Point object");this.x=t||0,this.y=e||0}static none(){return new a(0,0)}}var c=a;class h{constructor(t,e){if(void 0===t||void 0===e)throw new Error("Width of Height should be set for a Dimensions object");this.width=t||0,this.height=e||0}static none(){return new h(0,0)}}var d=h,l=class{constructor(t,e,s){if(!t instanceof c)throw new Error("point should be an instance of Point");if(!e instanceof d)throw new Error("dimensions should be an instance of Dimensions");this.point=t||c.none(),this.dimensions=e||d.none(),this.updaters=[],r.bind(this)(),s&&s.forEach(t=>this.addBehaviour(t))}addBehaviour(t){t.bind(this)()}update(t){this.emit("beforeUpdate"),this.updaters.forEach(e=>e(t,this)),this.emit("afterUpdate")}},u=class extends l{constructor(t,e,s){super(c.none(),e),this.image=t,s&&(this.scrollOptions=s),this.updaters.push(this.drawBackground.bind(this))}drawBackground(t){if(this.scrollOptions){const{speed:e,direction:s}=this.scrollOptions;this.scrollValue=this.scrollValue||0;const i=t.scaler(t.dimensions.width);this.scrollValue>=i&&(this.scrollValue=0),90===s?(this.scrollValue=this.scrollValue+=e,t.ctx.drawImage(this.image,Math.round(this.scrollValue-i),0,t.scaler(this.dimensionswidth),t.scaler(this.dimensions.height)),t.ctx.drawImage(this.image,Math.round(this.scrollValue),0,t.scaler(this.dimensions.width),t.scaler(this.dimensions.height))):270===s&&(this.scrollValue-=e,t.ctx.drawImage(this.image,Math.round(this.scrollValue+i),0,t.scaler(this.dimensions.width),t.scaler(this.dimensions.height)),t.ctx.drawImage(this.image,Math.round(this.scrollValue),0,t.scaler(this.dimensions.width),t.scaler(this.dimensions.height)))}else t.ctx.drawImage(this.image,0,0,t.scaler(this.dimensions.width),t.scaler(this.dimensions.height))}},m=class extends l{constructor(t,e,s){super(e,s),this.image=t,this.sWidth=s.width,this.sHeight=s.height,this.repeat=!1,this.frames=Math.round(t.width/s.width),this.speed=0,this.currentFrame=0,this.updaters.push(this.drawSpritesheetImage.bind(this))}drawSpritesheetImage(t){if(this.currentFrame>=this.frames)return;this.currentFrame>=this.frames&&this.repeat&&(this.currentFrame=0),t.ctx.drawImage(this.image,this.currentFrame*this.dimensions.width,0,this.sWidth,this.sHeight,t.scaler(this.point.x),t.scaler(this.point.y),t.scaler(this.dimensions.width),t.scaler(this.dimensions.height)),this.speed=this.speed+.1;const e=Math.round(this.speed);this.currentFrame+=e,1===e&&(this.speed=0)}};const p=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,f=(t,e)=>t.point.x<e.point.x+e.dimensions.width&&t.point.x+t.dimensions.width>e.point.x&&t.point.y<e.point.y+e.dimensions.height&&t.point.y+t.dimensions.height>e.point.y,w={backspace:8,tab:9,enter:13,shiftleft:16,shiftright:16,ctrlleft:17,ctrlrigght:17,altleft:18,altright:18,pause:19,capslock:20,escape:27,space:32,pageup:33,pagedown:34,end:35,home:36,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,insert:45,delete:46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,metaleft:91,metaright:92,select:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,numpadmultiply:106,numpadadd:107,numpadsubtract:109,numpaddecimal:110,numpaddivide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrolllock:145,semicolon:186,equalsign:187,comma:188,minus:189,period:190,slash:191,backquote:192,bracketleft:219,backslash:220,braketright:221,quote:222};class g{constructor(t,e){this.options=e||{},this.gameObjects=[],this.isGameOver=!1,this.started=!1,this.container=document.querySelector(t),b.bind(this)(this.container,this.options),r.bind(this)(),y.bind(this)(this.container,e),x.bind(this)(),e.enableCollisionDetection&&v.bind(this)()}start(){this.started=!0,this.isGameOver=!1,this.gameLoop()}reset(){this.gameObjects=[]}gameOver(){this.isGameOver=!0}clear(){this.ctx.clearRect(0,0,this.scaler(this.dimensions.width),this.scaler(this.dimensions.height))}gameLoop(){this.isGameOver||(this.emit("beforeGameLoop",this),this.clear(),this.gameObjects.forEach(t=>t.update(this)),this.emit("afterGameLoop",this),window.requestAnimationFrame(()=>{this.gameLoop()}))}insert(t){this.gameObjects.push(t)}remove(t){this.gameObjects=this.gameObjects.filter(e=>e!==t)}showPopup(t){const e=document.createElement("div");e.className="modal",e.style.width=this.scaler(this.width)+"px";const s=document.createElement("div");if(s.className="modal-content",t.title){const e=document.createElement("h1");e.innerHTML=t.title,s.appendChild(e)}if(t.text){const e=document.createElement("div");e.innerHTML=t.text,s.appendChild(e)}t.buttons&&t.buttons.length&&t.buttons.forEach(t=>{const e=document.createElement("button");e.innerHTML=t.text,e.style.padding="16px",e.style.fontWeight="700",e.addEventListener("click",t.onClick),s.appendChild(e)}),e.appendChild(s),this.container.appendChild(e)}closePopup(){const t=this.container.querySelector(".modal");t&&t.parentNode.removeChild(t)}}const b=function(t,e){const s=document.createElement("div");s.style.display="none",e.resources&&(e.resources.filter(t=>"image"===t.type).forEach(t=>{const e=document.createElement("img");e.src=t.src,e.id=t.src,e.dataset.name=t.name,s.append(e)}),e.resources.filter(t=>"sound"===t.type).forEach(t=>{const e=document.createElement("audio");e.src=t.src,e.id=t.src,e.dataset.name=t.name,s.append(e)})),t.appendChild(s),this.getResource=function(t){const e=document.querySelector(`[data-name='${t}']`);if(!e)throw new Error(`Couldn't find resource for: '${t}', please register this as an image resource!`);return"AUDIO"===e.tagName?e.cloneNode():e}},x=function(){this.keysDown=[],window.addEventListener("keydown",t=>{this.keysDown.push(t.keyCode),this.emit("keydown",t.keyCode)}),window.addEventListener("keyup",t=>{this.keydowns=this.keysDown.filter(e=>e!==t.keyCode),this.emit("keyup",t.keyCode)}),this.canvas.addEventListener("mousedown",t=>{this.emit("mousedown",t)}),this.canvas.addEventListener("mouseup",t=>{this.emit("mouseup",t)}),this.canvas.addEventListener("touchstart",t=>{this.emit("touchstart",t)}),this.canvas.addEventListener("touchend",t=>{this.emit("touchend",t)})},y=function(t,e){this.dimensions=new d(e.width||1024,e.height||768),this.calculateDimensions=function(e){const s=window.innerHeight,i=window.innerWidth;i>s?(this.scale=s/this.dimensions.height,t.style.width=this.scaler(this.dimensions.width)+"px",t.style.height=this.scaler(this.dimensions.height)+"px",e.width=this.scaler(this.dimensions.width),e.height=this.scaler(this.dimensions.height)):(this.scale=i/this.dimensions.width,t.style.width=this.scaler(this.dimensions.width)+"px",t.style.height=this.scaler(this.dimensions.height)+"px",e.width=this.scaler(this.dimensions.width),e.height=this.scaler(this.dimensions.height))},this.scaler=function(t){return t*this.scale};const s=document.createElement("canvas");s.className="world",t.appendChild(s),this.calculateDimensions(s),this.ctx=s.getContext("2d"),window.addEventListener("resize",()=>this.calculateDimensions(s)),s.focus(),this.canvas=s},v=function(){this.on("afterGameLoop",t=>{const e=t.gameObjects.filter(t=>t.collisionDetection);e.forEach(s=>{e.filter(t=>t!==s).forEach(e=>{f(s,e)&&t.emit("collisionDetected",{subject:s,target:e})})})})};var j=function(){this.collisionDetection=!0},k=t=>(function(){this.image=t,this.scaleV=1,this.scaleH=1,this.updateImage=function(t){if(-1===this.scaleV||-1===this.scaleH){const e=-1===this.scaleV?-1*this.point.x:this.point.x,s=-1===this.scaleH?-1*this.point.y:this.point.y;t.ctx.save(),t.ctx.translate(t.scaler(this.dimensions.width),0),t.ctx.scale(this.scaleV,this.scaleH),t.ctx.drawImage(this.image,t.scaler(e),t.scaler(s),t.scaler(this.dimensions.width),t.scaler(this.dimensions.height)),t.ctx.restore()}else t.ctx.drawImage(this.image,t.scaler(this.point.x),t.scaler(this.point.y),t.scaler(this.dimensions.width),t.scaler(this.dimensions.height))},this.updaters.push(this.updateImage.bind(this)),this.flipVertically=function(){this.scaleV=1===this.scaleV?-1:1},this.flipHorizontally=function(){this.scaleH=1===this.scaleH?-1:1}}),O=function(){this.direction=null,this.speed=0,this.easeInValue=0,this.deltaX=0,this.deltaY=0,this.boundaries=null,this.move=function(t,e,s){this.options=s||{},this.direction=t,null!=e&&(this.speed=this.options.easeIn?this.easeInValue:e,this.deltaX=e*Math.cos(t*Math.PI/180),this.deltaY=-e*Math.sin(t*Math.PI/180))},this.stop=function(){this.direction=null,this.speed=0,this.easeInValue=0},this.checkBoundary=t=>{this.boundaries&&(90===this.direction&&this.point.y-t<=this.boundaries.top&&(this.point.y=this.boundaries.top,this.stop()),270===this.direction&&this.point.y+t+this.dimensions.height>=this.boundaries.bottom&&(this.point.y=this.boundaries.bottom-this.dimensions.height,this.stop()))},this.updateMovement=function(){Number.isInteger(this.direction)&&(this.options.easeIn&&this.easeInValue<this.speed&&(this.easeInValue+=1),this.checkBoundary(this.speed),this.point.x+=this.deltaX,this.point.y+=this.deltaY)},this.setBoundaries=function(t,e,s,i){this.boundaries={top:t,right:e,bottom:s,left:i}},this.updaters.push(this.updateMovement.bind(this))};s.d(e,"GameWorld",function(){return g}),s.d(e,"behaviours",function(){return o}),s.d(e,"objects",function(){return i}),s.d(e,"utils",function(){return n}),e.default={GameWorld:g,behaviours:o,objects:i,utils:n}}])},function(t,e,s){"use strict";s.r(e);var i=s(0);class n extends i.objects.GameObject{constructor(t){super(t,new i.objects.Dimensions(20,5),[i.behaviours.movement,i.behaviours.collisions]),this.updaters.push(this.drawLaser.bind(this)),this.move(0,15)}drawLaser(t){t.ctx.beginPath(),t.ctx.moveTo(t.scaler(this.point.x),t.scaler(this.point.y)),t.ctx.lineTo(t.scaler(this.point.x)+this.dimensions.width,t.scaler(this.point.y)),t.ctx.strokeStyle="#FF0000",t.ctx.lineWidth=this.dimensions.height,t.ctx.stroke()}}class o extends i.objects.GameObject{constructor(t,e,s){super(e,new i.objects.Dimensions(t.width,t.height),[i.behaviours.createImageBehaviour(t),i.behaviours.movement,i.behaviours.collisions]),this.answer=s,this.updaters.push(this.drawAnswer.bind(this)),this.fullSpeed=5,this.move(180,2)}drawAnswer(t){t.ctx.font=`${t.scaler(40)}px Arial`,t.ctx.fillStyle="white",t.ctx.fillText(this.answer,t.scaler(this.point.x+50),t.scaler(this.point.y+85))}}class r extends i.objects.GameObject{constructor(t,e){super(e,new i.objects.Dimensions(t.width,t.height),[i.behaviours.createImageBehaviour(t),i.behaviours.movement,i.behaviours.collisions])}}class a extends i.objects.GameObject{constructor(t,e){super(e,i.objects.Dimensions.none(),[i.behaviours.createImageBehaviour(t)]),this.updaters.push(this.drawScoreboard.bind(this)),this.score=0}add(t){this.score+=t}drawScoreboard(t){t.ctx.save(),t.ctx.font=`${t.scaler(30)}px Arial`,t.ctx.fillStyle="white",t.ctx.textAlign="left",t.ctx.fillText("Score:  "+this.score,t.scaler(20),t.scaler(30)),t.ctx.restore()}}class c extends i.objects.GameObject{constructor(t){super(i.objects.Point.none()),this.upButtonDimensions=new i.objects.GameObject(new i.objects.Point(t.scaler(20),t.scaler(t.dimensions.height-160)),new i.objects.Dimensions(t.scaler(80),t.scaler(50))),this.downButtonDimensions=new i.objects.GameObject(new i.objects.Point(t.scaler(20),t.scaler(t.dimensions.height-80)),new i.objects.Dimensions(t.scaler(80),t.scaler(50))),this.shootButtonDimensions=new i.objects.GameObject(new i.objects.Point(t.scaler(t.dimensions.width-120),t.scaler(t.dimensions.height-140)),new i.objects.Dimensions(t.scaler(70),t.scaler(70))),this.updaters.push(this.updateTouchButtons.bind(this))}updateUpButton(t){t.ctx.fillStyle="grey",t.ctx.strokeStyle="black",t.ctx.lineWidth=3,t.ctx.beginPath();const{point:e,dimensions:s}=this.upButtonDimensions;t.ctx.moveTo(e.x+s.width/2,e.y),t.ctx.lineTo(e.x+s.width,e.y+s.height),t.ctx.lineTo(e.x,e.y+s.height),t.ctx.lineTo(e.x+s.width/2,e.y),t.ctx.stroke(),t.ctx.fill()}updateDownButton(t){t.ctx.fillStyle="grey",t.ctx.strokeStyle="black",t.ctx.lineWidth=3,t.ctx.beginPath();const{point:e,dimensions:s}=this.downButtonDimensions;t.ctx.moveTo(e.x,e.y),t.ctx.lineTo(e.x+s.width,e.y),t.ctx.lineTo(e.x+s.width/2,e.y+s.height),t.ctx.lineTo(e.x,e.y),t.ctx.stroke(),t.ctx.fill()}updateShootButton(t){t.ctx.fillStyle="#991a00",t.ctx.strokeStyle="black",t.ctx.lineWidth=3,t.ctx.beginPath();const{point:e,dimensions:s}=this.shootButtonDimensions;t.ctx.arc(e.x+s.width/2,e.y+s.height/2,s.width/2,0,2*Math.PI,!0),t.ctx.stroke(),t.ctx.fill()}updateTouchButtons(t){t.ctx.save(),this.updateUpButton(t),this.updateDownButton(t),this.updateShootButton(t),t.ctx.restore()}}class h extends i.objects.GameObject{constructor(t){super(t),this.updaters.push(this.updateExercise.bind(this)),this.text="",this.answer=null}createNew(){const t=i.utils.getRandomInt(1,10),e=i.utils.getRandomInt(1,10);this.a=t,this.b=e,this.text=t+" x "+e,this.answer=t*e}getRandomAnswers(){const t=new Array(3),e=i.utils.getRandomInt(0,2);t[e]=this.answer;for(let s=0;s<=2;s++)if(s!==e){let e=i.utils.getRandomInt(1,10);for(;e===this.b;)e=i.utils.getRandomInt(1,10);t[s]=this.a*e}return t}updateExercise(t){t.ctx.save(),t.ctx.font=`${t.scaler(60)}px Arial`,t.ctx.fillStyle="white",t.ctx.textAlign="center",t.ctx.fillText("Som:",t.scaler(280),t.scaler(t.dimensions.height-40)),t.ctx.fillText(this.text,t.scaler(510),t.scaler(t.dimensions.height-40)),t.ctx.restore()}}const d=()=>"ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,l={[i.utils.keyCodes.arrowup]:90,[i.utils.keyCodes.arrowdown]:270},u=new i.GameWorld("#container",{resources:[{type:"image",name:"background",src:"static/background.png"},{type:"image",name:"spaceship",src:"static/spaceship.png"},{type:"image",name:"astroid1",src:"static/astroid_1.png"},{type:"image",name:"dashboard",src:"static/dashboard.png"},{type:"image",name:"explosionspritesheet",src:"static/explosion.png"},{type:"sound",name:"shoot",src:"static/shoot.wav"},{type:"sound",name:"explosion",src:"static/explosion.wav"},{type:"sound",name:"crash",src:"static/crash.wav"}],enableCollisionDetection:!0});let m,p,f,w=null;u.on("touchstart",t=>{if(m&&w){const e=function(t,e){var s=t.getBoundingClientRect();return{x:e.touches[0].clientX-s.left,y:e.touches[0].clientY-s.top}}(u.canvas,t),s=new i.objects.GameObject(new i.objects.Point(e.x,e.y),new i.objects.Dimensions(10,10));i.utils.isCollision(w.upButtonDimensions,s)&&g(i.utils.keyCodes.arrowup,m),i.utils.isCollision(w.downButtonDimensions,s)&&g(i.utils.keyCodes.arrowdown,m),i.utils.isCollision(w.shootButtonDimensions,s)&&b(i.utils.keyCodes.space,m)}}),u.on("touchend",()=>{m&&m.stop()}),u.on("keydown",t=>{m&&(g(t,m),b(t,m))});const g=(t,e)=>{const s=l[t];Number.isInteger(s)&&e.move(s,8,{easeIn:!0})};u.on("keyup",t=>{const e=l[t];Number.isInteger(e)&&m.stop()});const b=(t,e)=>{t===i.utils.keyCodes.space&&(u.insert(new n(new i.objects.Point(e.point.x+e.dimensions.width,e.point.y+e.dimensions.height/2))),u.getResource("shoot").play())};u.on("collisionDetected",({subject:t,target:e})=>{const s=(t,e)=>{const s=new i.objects.SpriteSheetObject(u.getResource("explosionspritesheet"),t,new i.objects.Dimensions(142,200));s.frames=8,s.on("afterUpdate",()=>{s.currentFrame>=s.frames&&(u.remove(s),e&&e())}),u.insert(s)};(t instanceof r&&e instanceof o||t instanceof r&&e instanceof n)&&(u.remove(t),u.getResource("crash").play(),s(t.point,()=>{u.gameOver(),u.showPopup({title:"Game over!",buttons:[{text:"Opnieuw beginnen",onClick:y}]})})),t instanceof n&&e instanceof o&&(e.answer===f.answer?(u.getResource("explosion").play(),s(e.point),u.remove(e),u.remove(t),u.gameObjects.filter(t=>t instanceof o).forEach(t=>{t.move(t.direction,t.fullSpeed)}),p.add(10)):(t.move(180,1.3*t.speed),e.move(180,e.fullSpeed)))}),u.on("afterGameLoop",()=>{const t=u.gameObjects.filter(t=>t instanceof o);0===t.length?x():t.filter(t=>t.point.x<0-2*t.dimensions.width).forEach(t=>u.remove(t)),u.gameObjects.filter(t=>t instanceof n&&t.point.x+t.dimensions.width>u.dimensions.width).forEach(t=>u.remove(t))});const x=()=>{const t=u.dimensions.height/3;f.createNew();const e=f.getRandomAnswers(),s=new o(u.getResource("astroid1"),new i.objects.Point(u.dimensions.width-i.utils.getRandomInt(130,170),1*t/2-75),e[0]),n=new o(u.getResource("astroid1"),new i.objects.Point(u.dimensions.width-i.utils.getRandomInt(130,170),2*t/2),e[1]),r=new o(u.getResource("astroid1"),new i.objects.Point(u.dimensions.width-i.utils.getRandomInt(130,170),3*t/2+75),e[2]);u.insert(s),u.insert(n),u.insert(r)},y=()=>{const t=new r(u.getResource("spaceship"),new i.objects.Point(100,u.dimensions.height/2));t.setBoundaries(40,u.dimensions.width,u.dimensions.height-120,0);const e=new i.objects.Background(u.getResource("background"),u.dimensions),s=new a(u.getResource("dashboard"),new i.objects.Point(0,u.dimensions.height-120)),n=new h;if(p=s,m=t,f=n,u.closePopup(),u.reset(),u.insert(e),u.insert(s),u.insert(n),u.insert(t),d()){const t=new c(u);w=t,u.insert(t)}u.start()};u.showPopup({title:"Klaar om te beginnen?",text:[d()?"Gebruik de pijlen om je ruimteschip te besturen en de rode knop om op een rots te schieten":"Gebruik de pijltjes toetsen om je ruimteschip te besturen en de spatiebalk om een rots te schieten","Deze game is gemaakt door Ronald en Thijs van der Kooij ☺",""].join("<br /><br />"),buttons:[{text:"Start",onClick:y}]})}]);
//# sourceMappingURL=bundle.js.map