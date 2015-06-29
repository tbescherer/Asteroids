(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = function() {};

  Util.inherits = function(childClass, BaseClass) {
    var Surrogate = function () {};
    Surrogate.prototype = BaseClass.prototype;
    childClass.prototype = new Surrogate();
  }

  Util.randomVec = function(length) {
    var x = ((Math.random() * 2) - 1) * length;
    var y = Math.sqrt(Math.pow(length, 2) - Math.pow(x, 2));
    return [x,y];
  }
})();
