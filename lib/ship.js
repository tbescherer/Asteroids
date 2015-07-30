(function(){
  if (typeof Asteroids === "undefined") {
    Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(options) {
    var obj = {
      pos: options.pos,
      vel: [0, 0],
      radius: Ship.RADIUS,
      color: Ship.COLOR,
      game: options.game
    }
    Asteroids.MovingObject.call(this, obj);
  }

  Ship.RADIUS = 10;
  Ship.COLOR  = "red"
  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  // Ship.prototype.draw = function(ctx) {
  //   ctx.fillStyle = this.color;
  //   ctx.beginPath();
  //
  //   ctx.moveTo(this.pos[0], this.pos[1]);
  //
  //   var theta = Math.atan2(this.vel[1], this.vel[0])
  //   var magnitude = Math.sqrt(this.vel[0]*this.vel[0] + this.vel[1]*this.vel[1])
  //   console.log(theta);
  //   ctx.lineTo(this.pos[0] - 5 * Math.tan(theta), this.pos[1] + Math.tan(theta)*10);
  //   ctx.lineTo(this.pos[0] + 5 * Math.tan(theta), this.pos[1] + Math.tan(theta)*10);
  //   ctx.fill();
  // };

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function() {
    var bulletVel = []
    bulletVel[0] = 2 * this.vel[0];
    bulletVel[1] = 2 * this.vel[1];
    var bulPos = []
    bulPos[0] = this.pos[0];
    bulPos[1] = this.pos[1];
    var options = {
      pos: bulPos,
      vel: bulletVel,
      game: this.game
    };

    var bullet = new Asteroids.Bullet(options);
    this.game.bullets.push(bullet);
    console.log("bullets away");

  }

  Ship.prototype.smartBomb = function() {
    game.totalBombs -= 1
    var ship = this
    var bulPos = [];
    bulPos[0] = this.pos[0];
    bulPos[1] = this.pos[1];
    var options = {
      pos: bulPos,
      vel: [0,0],
      game: this.game,
      radius: 100,
      color: "rgba(100, 100, 100, 0.5)"
    }
    var bigBully = new Asteroids.Bullet(options)
    this.game.add(bigBully)

    setTimeout(function() {
      this.game.remove(bigBully);
    }, 2500)
  }

})();
