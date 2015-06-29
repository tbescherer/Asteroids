(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function() {
    this.DIM_X = window.innerWidth;
    this.DIM_Y = window.innerHeight;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = [];
  }

  Game.prototype.addAsteroids = function() {
    for(var i = 0, n = this.NUM_ASTEROIDS; i < n; i++) {
      this.asteroids.push(new Asteroids.Asteroid(this.randomPosition()));
    }
  }

  Game.prototype.randomPosition = function() {
    var x_pos = Math.random() * this.DIM_X;
    var y_pos = Math.random() * this.DIM_Y;
    return [x_pos, y_pos];
  }

})();
