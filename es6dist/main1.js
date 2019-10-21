(function () {
	'use strict';

	var num = 1;

	var num;
	function add(){
		num++;
	}

	// export default {
	//   addNum() {
	//     num++
	//   }
	// }

	var md1 = () => num++;

	console.log(num);
	add();
	md1();
	console.log(num);

}());
