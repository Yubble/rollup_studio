(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  function cube (x) {
    return x * x * x
  }

  console.log(cube(3));

}));
