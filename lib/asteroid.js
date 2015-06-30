(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(options) {
    var obj = {
      pos: options.pos,
      vel: Asteroids.Util.randomVec(1),
      color: Asteroid.COLOR,
      game: options.game,
      radius: options.radius || 40
    }

    Asteroids.MovingObject.call(this, obj);
  }
  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
  Asteroid.COLOR = "#fa7194";

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    } else if (otherObject instanceof Asteroids.Bullet) {
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  }

})();
