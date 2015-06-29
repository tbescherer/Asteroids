(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var movingObject = Asteroids.movingObject = function(obj) {
    this.pos = obj.pos,
    this.vel = obj.vel,
    this.radius = obj.radius,
    this.color = obj.color,
    this.game = obj.game
  }

  movingObject.prototype.draw = function(ctx) {
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

  movingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
  };


})();
