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

  Bullet.RADIUS = 5;
  Bullet.COLOR = "#ffffff";

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

})();
