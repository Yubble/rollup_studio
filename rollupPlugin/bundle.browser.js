(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.testRollup = factory());
}(this, function () { 'use strict';

  var version = "1.0.1";

  // import showLodash from './useNodeModules'

  // test node-resolve
  // import { nodefault } from './noDefault'

  // console.log('this noDefault is ', nodefault)

  // import answer from 'the-answer'

  // console.log('the answer is ', answer)

  // showLodash()
  console.log('version ' + version);

  console.log('this is browser')

  var main = () => {
    console.log('rollup测试用');
  };

  return main;

}));
