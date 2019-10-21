import { cube, square } from './maths'
// 同样的如果只引入了square而不调用它，也不会被webpack打包进.js文件中
import testr from '../rollupPlugin'

console.log(cube(3))

console.log(testr)
