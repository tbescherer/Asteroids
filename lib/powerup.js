(function(){
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Powerup = Asteroids.Powerup = function(options) {
    obj = {
      pos: options.pos,
      vel: [0,0],
      radius: Powerup.RADIUS,
      color: Powerup.COLOR,
      game: options.game
    }

    Asteroids.MovingObject.call(this, obj);
  };

  Powerup.RADIUS = 5;
  Powerup.COLOR = "orange";

  Asteroids.Util.inherits(Powerup, Asteroids.MovingObject);

})();
