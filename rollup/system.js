System.register([], function () {
  'use strict';
  return {
    execute: function () {

      console.log('此时执行了maths');

      function cube (x) {
        return x * x * x
      }

      console.log(cube(3));

    }
  };
});
