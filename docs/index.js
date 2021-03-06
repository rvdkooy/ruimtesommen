import { GameWorld, utils, objects } from 'tweedee';
import { Spaceship, Laser, Scoreboard, Astroid, Exercises, TouchButtons } from './objects';

const isTouchDevice = () => {
  return ('ontouchstart' in window) || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch;
};

const keyCodeToDirectionMap = {
  [utils.keyCodes.arrowup]: 90,
  [utils.keyCodes.arrowdown]: 270,
};

const world = new GameWorld('#container', {
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

function getMousePos(canvasDom, mouseEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: mouseEvent.touches[0].clientX - rect.left,
    y: mouseEvent.touches[0].clientY - rect.top
  };
}

const checkWhichButtonPressed = (e) => {
  if (_spaceship && _touchButtons) {
    const coords =  getMousePos(world.canvas, e);
    
    const touchPoint = new objects.GameObject(new objects.Point(coords.x, coords.y), new objects.Dimensions(10, 10));
    // touchPoint.updaters.push((world)=> {
    //   var pointSize = 3; // Change according to the size of the point.
      
    //   world.ctx.fillStyle = "#ff2626"; // Red color
    //   world.ctx.beginPath(); //Start path
    //   world.ctx.arc(coords.x, coords.y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
    //   world.ctx.fill(); // Close the path and fill.
    // })

    // world.insert(touchPoint)

    if (utils.isCollision(_touchButtons.upButtonDimensions, touchPoint)) {
      handleArrowKeys(utils.keyCodes.arrowup, _spaceship);
    }
    if (utils.isCollision(_touchButtons.downButtonDimensions, touchPoint)) {
      handleArrowKeys(utils.keyCodes.arrowdown, _spaceship);
    }
    if (utils.isCollision(_touchButtons.shootButtonDimensions, touchPoint)) {
      handleShootLaser(utils.keyCodes.space, _spaceship);
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
  if (keyCode === utils.keyCodes.space) {
    world.insert(new Laser(new objects.Point((spaceship.point.x + (spaceship.dimensions.width)), (spaceship.point.y + (spaceship.dimensions.height / 2)))));
    world.getResource('shoot').play();
  }
};

world.on('collisionDetected', ({ subject, target }) => {
  const addExplosionTo = (point, cb) => {
    const explosion = new objects.SpriteSheetObject(world.getResource('explosionspritesheet'), point, new objects.Dimensions(142, 200));
    explosion.frames = 8;
    explosion.on('afterUpdate', () => {
      if (explosion.currentFrame >= explosion.frames) {
        world.remove(explosion);
        cb && cb();
      }
    });
    world.insert(explosion);
  }
  
  
  if ((subject instanceof Spaceship && target instanceof Astroid) ||
    (subject instanceof Spaceship && target instanceof Laser)) {
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
  
  if ((subject instanceof Laser && target instanceof Astroid)) {
    if (target.answer === _exercises.answer) {
      world.getResource('explosion').play();
      
      addExplosionTo(target.point);
      
      world.remove(target);
      world.remove(subject);
      world.gameObjects.filter(go => go instanceof Astroid).forEach(go => {
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
  const astroids = world.gameObjects.filter(go => go instanceof Astroid);
  if (astroids.length === 0) {
    insertAstroids();
  } else {
    astroids.filter(astroid => astroid.point.x < 0 - (astroid.dimensions.width * 2)).forEach(astroid => world.remove(astroid));
  }
  world.gameObjects.filter(go => go instanceof Laser && (go.point.x + go.dimensions.width) > world.dimensions.width).forEach(laser => world.remove(laser));
});

const insertAstroids = () => {
  const y = world.dimensions.height / 3;
  _exercises.createNew();
  const answers = _exercises.getRandomAnswers();
  const astroid1 = new Astroid(world.getResource('astroid1'), new objects.Point((world.dimensions.width - utils.getRandomInt(130, 170)), ((y * 1) / 2) - 75), answers[0]);
  const astroid2 = new Astroid(world.getResource('astroid1'), new objects.Point((world.dimensions.width - utils.getRandomInt(130, 170)), ((y * 2) / 2)), answers[1]);
  const astroid3 = new Astroid(world.getResource('astroid1'), new objects.Point((world.dimensions.width - utils.getRandomInt(130, 170)), ((y * 3) / 2) + 75), answers[2]);

  world.insert(astroid1);
  world.insert(astroid2);
  world.insert(astroid3);
}

const startTheGame = () => {
  const spaceship = new Spaceship(world.getResource('spaceship'), new objects.Point(100, (world.dimensions.height / 2)));
  spaceship.setBoundaries(40, world.dimensions.width, world.dimensions.height - 120, 0);
  
  const background = new objects.Background(world.getResource('background'), world.dimensions);
  const scoreboard = new Scoreboard(world.getResource('dashboard'), new objects.Point(0, world.dimensions.height - 120));
  const exercises = new Exercises();
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
    const touchButtons = new TouchButtons(world);
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
          'Deze game is gemaakt door Ronald en Thijs van der Kooij ☺',
          '',
        ].join('<br /><br />'),
  buttons: [{ text: 'Start', onClick: startTheGame }],
});



