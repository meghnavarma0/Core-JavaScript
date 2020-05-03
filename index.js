// let x = function(a) {
// 	return function(b) {
// 		if (b) {
// 			return x(a + b);
// 		} else {
// 			return a;
// 		}
// 	};
// };

let x = a => b => (b ? x(a + b) : a);

console.log(x(1)(2)(3)(4)());
