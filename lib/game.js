(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function() {
    this.asteroids = [];
    this.addAsteroids();
  }

  Game.DIM_X = window.innerWidth;
  Game.DIM_Y = window.innerHeight;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.addAsteroids = function() {
    for(var i = 0, n = Game.NUM_ASTEROIDS; i < n; i++) {
      this.asteroids.push(new Asteroids.Asteroid(this.randomPosition(), this));
    }
  }

  Game.prototype.randomPosition = function() {
    var x_pos = Math.random() * Game.DIM_X;
    var y_pos = Math.random() * Game.DIM_Y;
    return [x_pos, y_pos];
  }

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach( function(asteroid) {
      asteroid.draw(ctx);
    });
  }

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach( function(asteroid) {
      asteroid.move();
    });
  }

  Game.prototype.wrap = function(pos) {
    if (pos[0] >= Game.DIM_X + 1) {
      pos[0] = 0;
    } else if (pos[0] <= -1) {
      pos[0] = Game.DIM_X;
    }

    if (pos[1] >= Game.DIM_Y + 1) {
      pos[1] = 0;
    } else if (pos[1] <= -1) {
      pos[1] = Game.DIM_Y;
    }
  }

  Game.prototype.checkCollisions = function() {
    for (var i = 0, n = Game.NUM_ASTEROIDS; i < n; i++){};
  }

})();
