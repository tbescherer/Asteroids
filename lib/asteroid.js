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
  Asteroid.RADIUS = 1;
  Asteroid.COLOR = "#fa7194";
})();