(function(){
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Powerup = Asteroids.Powerup = function(options) {
    obj = {
      pos: options.pos,
      vel: [0,0],
      radius: Powerup.RADIUS,
      color: options.color,
      game: options.game,
      lives: options.lives,
      bombs: options.bombs
    }
    Asteroids.MovingObject.call(this, obj);
  };

  Powerup.RADIUS = 5;
  Asteroids.Util.inherits(Powerup, Asteroids.MovingObject);
})();
