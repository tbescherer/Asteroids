(function(){
  if (typeof Asteroids === "undefined") {
    Asteroids = {};
  }

  var Ship = Asteroids.Ship = function(options) {
    var obj = {
      pos: options.pos,
      vel: [0, 0],
      radius: Ship.RADIUS,
      color: Ship.COLOR,
      game: options.game
    }
  }

  Ship.RADIUS = 10;
  Ship.COLOR  = "#048abf"

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);
})();
