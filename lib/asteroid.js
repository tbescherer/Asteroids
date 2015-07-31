(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(options) {
    var the_radius = options.radius || 40
    var obj = {
      pos: options.pos,
      vel: Asteroids.Util.randomVec(1),
      radius: the_radius,
      color: function() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
      }(),
      game: options.game
    }
    Asteroids.MovingObject.call(this, obj);
  }
  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    } else if (otherObject instanceof Asteroids.Bullet) {
      if (otherObject.radius != 100) {
        this.game.remove(otherObject);
      }
      this.game.remove(this);
    } else if (otherObject instanceof Asteroids.Asteroid) {
      var dx = Math.pow(otherObject.pos[0] - this.pos[0], 2);
      var dy = Math.pow(otherObject.pos[1] - this.pos[1], 2);
      var dist = Math.sqrt(dx + dy);
      if (this.radius + 5 >= dist || otherObject.radius + 5 >= dist) {
        var finalRad = Math.sqrt(Math.pow(otherObject.radius, 2) + Math.pow(this.radius, 2));
        otherObject.vel[0] = ((otherObject.vel[0] * otherObject.radius) + (this.vel[0] * this.radius))/finalRad
        otherObject.vel[1] = ((otherObject.vel[1] * otherObject.radius) + (this.vel[1] * this.radius))/finalRad
        otherObject.radius = finalRad;
        otherObject.color = Asteroids.Util.addColors(otherObject.color, this.color);
        var idx = this.game.asteroids.indexOf(this);
        this.game.asteroids.splice(idx, 1);
      }
    }
  }

})();
