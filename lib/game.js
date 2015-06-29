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

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach( function(asteroid) {
      asteroid.draw();
    });
  }

})();
