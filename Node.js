'use strict';

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var Node = (function() {
  function Node(x, y, r, mov) {
    _classCallCheck(this, Node);

    this.x = x;
    this.y = y;
    this.r = r;
    this.mov = mov;
  }

  _createClass(Node, [
    {
      key: 'connect',
      value: function connect(o) {
        stroke(255);
        line(this.x, this.y, o.x, o.y);
        // textSize(map(this.r + o.r, minR * 2, maxR * 2, 8, 32));
        // fill(255);
        // // stroke(0);
        // text('fuck donald trump', this.x, this.y);
      }
    },
    {
      key: 'move',
      value: function move(i) {
        var t = frameCount / 100;
        var tt = frameCount / 1000;

        this.x += map(noise(cos(t), tt, i), 0, 1, -this.mov, this.mov);
        this.y += map(
          noise(sin(t), i / 10, cos(tt)),
          0,
          1,
          -this.mov,
          this.mov
        );
      }
    },
    {
      key: 'flux',
      value: function flux() {
        this.r += 0.5 * this.mov * sin(frameCount / 10);
      }
    },
    {
      key: 'show',
      value: function show() {
        noStroke();
        fill(255, 50);
        ellipse(this.x, this.y, this.r / 2);
      }
    },
    {
      key: 'update',
      value: function update() {
        // if (
        //   this.x < -this.r ||
        //   this.x > width + this.r ||
        //   this.y < -this.r ||
        //   this.y > height + this.r
        // ) {
        //   this.x = random(width);
        //   this.y = random(height);
        // }

        if (this.x < -this.r) {
          this.x = width + this.r;
        }

        if (this.x > width + this.r) {
          this.x = -this.r;
        }

        if (this.y < -this.r) {
          this.y = height + this.r;
        }

        if (this.y > height + this.r) {
          this.y = -this.r;
        }
      }
    }
  ]);

  return Node;
})();
