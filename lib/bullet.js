(function(){
  if (typeof Asteroids === "undefined") {
    Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function(options) {
    obj = {
      pos: options.pos,
      vel: options.vel,
      radius: Bullet.RADIUS,
      color: Bullet.COLOR,
      game: options.game
    }

    Asteroids.MovingObject.call(this, obj);
  }

  Bullet.RADIUS = 15;
  Bullet.COLOR = "#000000";

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

})();
