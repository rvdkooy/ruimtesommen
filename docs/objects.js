import { objects, mixins, utils, behaviours } from 'tweedee';

export class Laser extends objects.GameObject {
  constructor(point) {
    super(point, new objects.Dimensions(20, 5), [behaviours.movement, behaviours.collisions]);
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

export class Astroid extends objects.GameObject {
  constructor(image, point, answer) {
    super(point, new objects.Dimensions(image.width, image.height), [
      behaviours.createImageBehaviour(image),
      behaviours.movement,
      behaviours.collisions
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

export class Spaceship extends objects.GameObject {
  constructor(image, point) {
    super(point, new objects.Dimensions(image.width, image.height), [
      behaviours.createImageBehaviour(image),
      behaviours.movement,
      behaviours.collisions
    ]);
  }
}

export class Scoreboard extends objects.GameObject {
  constructor(image, point) {
    super(point, objects.Dimensions.none(), [
      behaviours.createImageBehaviour(image),
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

export class TouchButtons extends objects.GameObject {
  constructor(world) {
    super(objects.Point.none());
    this.upButtonDimensions = new objects.GameObject(
      new objects.Point(world.scaler(20), world.scaler(world.dimensions.height - 160)),
      new objects.Dimensions(world.scaler(80), world.scaler(50)));
    this.downButtonDimensions = new objects.GameObject(
      new objects.Point(world.scaler(20), world.scaler(world.dimensions.height - 80)),
      new objects.Dimensions(world.scaler(80), world.scaler(50)));
    this.shootButtonDimensions = new objects.GameObject(
      new objects.Point(world.scaler(world.dimensions.width - 120), world.scaler(world.dimensions.height - 140)),
      new objects.Dimensions(world.scaler(70), world.scaler(70)),
    );
    this.updaters.push(this.updateTouchButtons.bind(this));
  }

  updateUpButton(world) {
    world.ctx.fillStyle = 'grey';
    world.ctx.strokeStyle = "black";
    world.ctx.lineWidth = 3;
    world.ctx.beginPath();

    const { point, dimensions } = this.upButtonDimensions;
    world.ctx.moveTo(point.x + dimensions.width / 2, point.y);
    world.ctx.lineTo(point.x + dimensions.width, point.y + dimensions.height);
    world.ctx.lineTo(point.x, point.y + dimensions.height);
    world.ctx.lineTo(point.x + dimensions.width / 2, point.y);
    world.ctx.stroke();
    world.ctx.fill();
  }

  updateDownButton(world) {
    world.ctx.fillStyle = 'grey';
    world.ctx.strokeStyle = "black";
    world.ctx.lineWidth = 3;
    world.ctx.beginPath();

    const { point, dimensions } = this.downButtonDimensions;
    world.ctx.moveTo(point.x, point.y);
    world.ctx.lineTo(point.x + dimensions.width, point.y);
    world.ctx.lineTo(point.x + (dimensions.width / 2), point.y + dimensions.height);
    world.ctx.lineTo(point.x, point.y);
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
      point.x + (dimensions.width / 2),
      point.y + (dimensions.height / 2),
      dimensions.width / 2, 0, Math.PI * 2, true
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

export class Exercises extends objects.GameObject {
  constructor(point) {
    super (point);
    this.updaters.push(this.updateExercise.bind(this));
    this.text = "";
    this.answer = null;
  }

  createNew () {
    const a = utils.getRandomInt(1, 10);
    const b = utils.getRandomInt(1, 10);
    this.a = a;
    this.b = b;
    this.text = a + ' x ' + b;
    this.answer = a * b;
  }

  getRandomAnswers () {
    const result = new Array(3);
    const position = utils.getRandomInt(0, 2);
    result[position] = this.answer;
    for (let index = 0; index <= 2; index++) {
      if (index !== position) {
        let b = utils.getRandomInt(1, 10);
        while (b === this.b) {
          b = utils.getRandomInt(1, 10);
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