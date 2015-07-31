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

  Util.addColors = function(colorOne, colorTwo) {
    var redOne = parseInt(colorOne.slice(1,3), 16);
    var greenOne = parseInt(colorOne.slice(3,5), 16);
    var blueOne = parseInt(colorOne.slice(5,7), 16);
    var redTwo = parseInt(colorTwo.slice(1,2), 16);
    var greenTwo = parseInt(colorTwo.slice(3,4), 16);
    var blueTwo = parseInt(colorTwo.slice(5,6), 16);
    var hexCol = '#' + Math.round(((redOne + redTwo)/2)).toString(16) + Math.round(((blueOne + blueTwo)/2)).toString(16) + Math.round(((greenOne + greenTwo)/2)).toString(16);
    return hexCol;
  }
})();
