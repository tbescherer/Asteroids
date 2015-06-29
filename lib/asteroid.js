(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(options) {
    var obj = {
      pos: options.pos,
      vel: Asteroids.Util.randomVec(1),
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR,
      game: options.game
    }

    Asteroids.MovingObject.call(this, obj);
  }
  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
  Asteroid.RADIUS = 50;
  Asteroid.COLOR = "#fa7194";
})();
