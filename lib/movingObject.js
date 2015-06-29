(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var movingObject = Asteroids.movingObject = function(obj) {
    this.pos = obj.pos,
    this.vel = obj.vel,
    this.radius = obj.radius,
    this.color = obj.color
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
})();
