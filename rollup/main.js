import { cube, square } from './maths'

// 就算将square引到main文件中，只要不调用它，都不会被打包到结果文件中。
console.log(cube(3))
