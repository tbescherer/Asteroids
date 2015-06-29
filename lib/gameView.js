(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  GameView.prototype.start = function() {
    this.bindKeyHandlers();
    setInterval((function() {
      this.game.step();
      this.game.draw(this.ctx);
    }).bind(this), 20);
  }

  GameView.prototype.bindKeyHandlers = function() {
    var game = this.game;
    key('w', function(){ game.ship.power([0,-1])});
    key('a', function(){ game.ship.power([-1,0])});
    key('d', function(){ game.ship.power([1,0])});
    key('s', function(){ game.ship.power([0,1])});
    key('space', function() {
      if (key.isPressed('space')) {
        game.ship.fireBullet();
      }
    });
  }
})();
