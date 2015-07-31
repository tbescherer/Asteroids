(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function() {
    var game = this;
    this.lives = 5;
    this.asteroids = [];
    this.num_asteroids = Game.NUM_ASTEROIDS
    this.bullets = [];
    this.powerups = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship({ pos: game.randomPosition(), game: this });
    this.firedBullet = false;
    this.totalBombs = 5;
    // this.objects = this.allObjects();
  }

  Game.DIM_X = window.innerWidth;
  Game.DIM_Y = window.innerHeight;
  Game.NUM_ASTEROIDS = 6;

  Game.prototype.resetBullets = function() {
    setTimeout( function() {
      game.firedBullet = false;
    }, 250);
  }

  Game.prototype.allObjects = function() {
    return this.asteroids.concat(this.ship).concat(this.bullets).concat(this.powerups);
  }

  Game.prototype.addAsteroids = function() {
    for(var i = 0, n = this.num_asteroids; i < n; i++) {
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
    if (game.lives <= 0) {
      ctx.font = "100px Arial";
      ctx.strokeText("GAME OVER", 400, 400);
    } else {
      this.allObjects().forEach( function(movingObject) {
        movingObject.draw(ctx);
      });
      ctx.font = "20px Arial";
      ctx.strokeText("Lives: " + game.lives, 930, 30);
      ctx.strokeText("Bombs: " + game.totalBombs, 930, 60);
    }
  }

  Game.prototype.moveObjects = function() {
    this.allObjects().forEach( function(movingObject) {
      movingObject.move();
    });
  }

  Game.prototype.wrap = function(pos) {
    if (pos[0] > Game.DIM_X + 1) {
      pos[0] = 0;
    } else if (pos[0] <= -1) {
      pos[0] = Game.DIM_X;
    }

    if (pos[1] > Game.DIM_Y + 1) {
      pos[1] = 0;
    } else if (pos[1] <= -1) {
      pos[1] = Game.DIM_Y;
    }
  }

  Game.prototype.checkCollisions = function() {
    var allObjs = this.allObjects();
    for (var i = 0, n = allObjs.length; i < n - 1; i++){
      for (var j = i + 1; j < n; j++) {
        if (allObjs[i].isCollidedWith(allObjs[j])) {
          allObjs[i].collideWith(allObjs[j]);
        }
      }
    };
  }

  Game.prototype.handleInput = function() {
    if (!this.firedBullet) {
      if (key.isPressed("space")) {
        game.ship.fireBullet();
        this.firedBullet = true;
        game.resetBullets();
      }
    }

    if (key.isPressed("w")) {
      game.ship.power([0,-.5])
    }
    if (key.isPressed("a")) {
      game.ship.power([-.5,0])
    }
    if (key.isPressed("d")) {
      game.ship.power([.5,0])
    }
    if (key.isPressed("s")) {
      game.ship.power([0,.5])
    }
    if (key.isPressed("x")) {
      if (game.totalBombs > 0 && !this.firedBullet) {
        game.ship.smartBomb();
        this.firedBullet = true;
        game.resetBullets()
      }
    }
  }

  Game.prototype.step = function() {
    game.handleInput();
    this.moveObjects();
    this.checkCollisions();
    if (this.asteroids.length === 0) {
      this.num_asteroids += 2;
      this.addAsteroids();
    }
  }

  Game.prototype.remove = function(obj) {
    if (obj instanceof Asteroids.Bullet) {
      var idx = this.bullets.indexOf(obj);
      this.bullets.splice(idx, 1);
    } else if (obj instanceof Asteroids.Asteroid) {
      if (obj.radius > 10) {
        var options = {pos: obj.pos.slice(), game: this, radius: obj.radius/2}
        var astOne = new Asteroids.Asteroid(options);
        options.pos = [obj.pos[0]+ options.radius, obj.pos[1] + options.radius]
        var astTwo = new Asteroids.Asteroid(options);
        this.asteroids.push(astOne);
        this.asteroids.push(astTwo);
      } else {
        var chance = Math.random()
        if (chance > 0.9) {
          var options = {pos: obj.pos.slice(), game: this, lives: 1, bombs: 0, color: "red"}
          var powerup = new Asteroids.Powerup(options);
          this.powerups.push(powerup);
        } else if (chance > 0.7) {
          var options = {pos: obj.pos.slice(), game: this, lives: 0, bombs: 1, color: "orange"};
          var powerup = new Asteroids.Powerup(options);
          this.powerups.push(powerup);
        }
      }
      var idx = this.asteroids.indexOf(obj);
      this.asteroids.splice(idx, 1);
    } else if (obj instanceof Asteroids.Powerup) {
      var idx = this.bullets.indexOf(obj);
      this.powerups.splice(idx,1);
    }
  }

  Game.prototype.add = function(obj) {
    if (obj instanceof Asteroids.Bullet && this.bullets.length <= 10) {
      if (this.bullets.length > 10) {
        this.bullets.shift();
        this.bullets.push(obj);
      } else {
        this.bullets.push(obj);
      }
    } else if (obj instanceof Asteroids.Asteroid) {
      this.asteroids.push(obj);
    }
  }



})();
