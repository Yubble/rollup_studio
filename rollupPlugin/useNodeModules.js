import lodash from 'lodash'

var arr = [1, 2, 1]

export default () => {
  console.log('lodash is ', lodash)
  console.log('arrFill is ', lodash.fill(arr, 'a'))
}