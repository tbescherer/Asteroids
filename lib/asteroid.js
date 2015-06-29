(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(pos, game) {
    var obj = {
      pos: pos,
      vel: Asteroids.Util.randomVec(1),
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR,
      game: game
    }

    Asteroids.MovingObject.call(this, obj);
  }
  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
  Asteroid.RADIUS = 10;
  Asteroid.COLOR = "#fa7194";
})();
