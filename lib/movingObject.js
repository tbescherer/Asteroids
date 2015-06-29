(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(options) {
    this.pos = options.pos,
    this.vel = options.vel,
    this.radius = options.radius,
    this.color = options.color,
    this.game = options.game
  }

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.game.wrap(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var dx = Math.pow(otherObject.pos[0] - this.pos[0], 2);
    var dy = Math.pow(otherObject.pos[1] - this.pos[1], 2);
    var dist = Math.sqrt(dx + dy);
    if (dist <= this.radius + otherObject.radius) {
      return true;
    } else {
      return false;
    }
  }

  MovingObject.prototype.collideWith = function(otherObject) {
    this.game.remove(otherObject);
    this.game.remove(this);
  }

})();
