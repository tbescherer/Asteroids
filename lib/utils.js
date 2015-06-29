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
})();
