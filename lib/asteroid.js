(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function(pos) {
    var obj = {
      pos: pos,
      vel: Asteroids.Util.randomVec(1),
      radius: Asteroid.RADIUS,
      color: Asteroid.COLOR
    }

    Asteroids.movingObject.call(this, obj);
  }
  Asteroids.Util.inherits(Asteroid, Asteroids.movingObject);
  Asteroid.RADIUS = 10;
  Asteroid.COLOR = "#fa7194";
})();
