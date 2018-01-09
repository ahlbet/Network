'use strict';

var nodes = [];
var num = 100;
var minR = 60;
var maxR = 130;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(1000, 667);
  background(0);
  seed();
  // console.log(nodes);
}

function draw() {
  background(0);

  // if (frameCount > 150) {
  //   // noLoop();
  //   // save();
  // }

  if (frameCount % 100 == 0 && nodes.length < 201) {
    seed();
  }

  for (var i = 0; i < nodes.length; i++) {
    var n = nodes[i];
    n.show();
    n.move(i);
    // n.flux(i);
    n.update();

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (
        var _iterator = nodes[Symbol.iterator](), _step;
        !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
        _iteratorNormalCompletion = true
      ) {
        var other = _step.value;

        var d = dist(n.x, n.y, other.x, other.y);
        if (n !== other && d < (n.r + other.r) / 2) {
          n.connect(other);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
}

function seed() {
  // for (let i = 0; i < num; i++) {
  // let x = random(width);
  // let y = random(height);
  var x = width / 2;
  var y = height / 2;
  var r = floor(random(minR, maxR));
  var mov = random(3);
  var node = new Node(x, y, r, mov);
  nodes.push(node);
  // }
}
