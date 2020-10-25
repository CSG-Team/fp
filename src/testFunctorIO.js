const _ = require('lodash');

var IO = function(f) {
  this.__value = f;
}

IO.of = function(x) {
  return new IO(function() {
    return x;
  });
}

IO.prototype.map = function(f) {
  return new IO(_.flowRight(f, this.__value));
  
}

const simulation_window = {
  innerWidth: 1000,

};
const window = simulation_window;

const io_window = new IO(function(){ return window; });

const io2 = io_window.map(function(win){ return win.innerWidth });

// 最终还是要执行的
console.log(io_window.__value())
console.log(io2.__value())
