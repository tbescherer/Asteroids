(function(){
  if (typeof Asteroids === "undefined") {
    Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function(options) {
    obj = {
      pos: options.pos,
      vel: options.vel,
      radius: options.radius || Bullet.RADIUS,
      color: options.color || Bullet.COLOR,
      game: options.game
    }

    Asteroids.MovingObject.call(this, obj);
  }

  Bullet.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1] + 10,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  Bullet.RADIUS = 3;
  Bullet.COLOR = "#000000";

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

})();
