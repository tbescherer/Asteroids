(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = {};

  Util.inherits = function(childClass, BaseClass) {
    var Surrogate = function () {};
    Surrogate.prototype = BaseClass.prototype;
    childClass.prototype = new Surrogate();
  }

  Util.randomVec = function(length) {
    var dir = [-1 , 1];
    var randBin = Math.floor(Math.random() * 2);
    var x = (Math.random() * 2 - 1) * length;
    var y = Math.sqrt(Math.pow(length, 2) - Math.pow(x, 2)) * dir[randBin];
    return [x,y];
  }
})();
