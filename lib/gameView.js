(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var gameView = Asteroids.gameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  gameView.prototype.start = function() {
    setInterval((function() {
      this.game.moveObjects();
      this.game.draw();
    }).bind(this), 20);
  }
})();
