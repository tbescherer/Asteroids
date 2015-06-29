(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function() {
    var game = this;
    this.asteroids = [];
    this.bullets = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship({ pos: game.randomPosition(), game: this });
    this.firedBullet = false;
    // this.objects = this.allObjects();
  }

  Game.DIM_X = window.innerWidth;
  Game.DIM_Y = window.innerHeight;
  Game.NUM_ASTEROIDS = 4;

  Game.prototype.allObjects = function() {
    return this.asteroids.concat(this.ship).concat(this.bullets);
  }

  Game.prototype.addAsteroids = function() {
    for(var i = 0, n = Game.NUM_ASTEROIDS; i < n; i++) {
      var options = {pos: this.randomPosition(), game: this}
      this.asteroids.push(new Asteroids.Asteroid(options));
    }
  }

  Game.prototype.randomPosition = function() {
    var x_pos = Math.random() * Game.DIM_X;
    var y_pos = Math.random() * Game.DIM_Y;
    return [x_pos, y_pos];
  }

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach( function(movingObject) {
      movingObject.draw(ctx);
    });
  }

  Game.prototype.moveObjects = function() {
    this.allObjects().forEach( function(movingObject) {
      movingObject.move();
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
    for (var i = 0, n = this.allObjects().length; i < n - 1; i++){
      for (var j = i + 1; j < n; j++) {
        if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
          this.allObjects()[i].collideWith(this.allObjects()[j]);
        }
      }
    };
  }

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  }

  Game.prototype.remove = function(obj) {
    if (obj instanceof Asteroids.Bullet) {
      var idx = this.bullets.indexOf(obj);
      this.bullets.splice(idx, 1);
    } else if (obj instanceof Asteroids.Asteroid) {
      var idx = this.asteroids.indexOf(obj);
      this.asteroids.splice(idx, 1);
    }
  }

  Game.prototype.add = function(obj) {
    if (obj instanceof Asteroids.Bullet) {
      this.bullets.push(obj);
    } else if (obj instanceof Asteroids.Asteroid) {
      this.asteroids.push(obj);
    }
  }

})();
