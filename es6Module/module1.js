var num = 1

export var num
export function add(){
	num++
}

// export default {
//   addNum() {
//     num++
//   }
// }

export default () => num++