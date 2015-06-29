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
  Ship.COLOR  = "#048abf"

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  }

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

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
    }

    var bullet = new Asteroids.Bullet(options);
    this.game.bullets.push(bullet);
    console.log("bullets away");

  }

})();
