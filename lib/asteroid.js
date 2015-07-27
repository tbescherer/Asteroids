(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(options) {
    var obj = {
      pos: options.pos,
      vel: Asteroids.Util.randomVec(1),
      radius: options.radius || 40,
      color: function() {
        switch(options.radius || 40) {
          case 40:
            return "purple";
          case 20:
            return "green";
          case 10:
            return "blue";
          default:
            return "orange";
        }
      }.bind(this)(),
      game: options.game
    }
    Asteroids.MovingObject.call(this, obj);
  }
  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    } else if (otherObject instanceof Asteroids.Bullet) {
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  }

})();
