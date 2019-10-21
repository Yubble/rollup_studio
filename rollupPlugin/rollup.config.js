import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import builtins from 'rollup-plugin-node-builtins'

export default {
  input: 'main.js',
  output: [
    { file: 'bundle.js', format: 'cjs' },
    { file: 'bundle.mjs', format: 'es' },
    { file: 'bundle.browser.js', format: 'umd', name: 'testRollup' }
  ],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    builtins()
  ]
}
