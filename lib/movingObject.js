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
})();
