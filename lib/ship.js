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

  Ship.RADIUS = 6;
  Ship.COLOR  = "red"
  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.draw = function(ctx) {
    ctx.save();
    ctx.translate(this.pos[0], this.pos[1]);
    var theta = Math.atan2(this.vel[1], this.vel[0]) + Math.PI/2;
    ctx.rotate(theta);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-10, 20);
    ctx.lineTo(10, 20);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  };

  Ship.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.game.wrap(this.pos);
    this.vel[0] -= (this.vel[0]/100)
    this.vel[1] -= (this.vel[1]/100)
  };

  Ship.prototype.relocate = function() {
    this.game.lives--;
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function(impulse) {
    if (Math.abs(this.vel[0]) < 15) {
      this.vel[0] += impulse[0];
    }
    if (Math.abs(this.vel[1]) < 15) {
      this.vel[1] += impulse[1];
    }
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


    Ship.prototype.collideWith = function(otherObject) {
      if (otherObject instanceof Asteroids.Powerup) {
        this.game.totalBombs += otherObject.bombs;
        this.game.lives += otherObject.lives;
        this.game.remove(otherObject);
      }
    }

})();
