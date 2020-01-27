// /*
// To Subtract the numbers in the array OR to get the integer Sum of the elements in the array, use "reduce()" method.
// It'll give you a result in a single output value.
// Since "reduce()" is a method, so it requires a callback function that add or subtract, (to pass it through) as a param.
// */

// Brute force approach:
const array = [ 1001, 1002, 1003 ];
function sumOfArr (arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
}

console.log(sumOfArr(array));
// Brute Force Algorithms refers to a programming style that does not include any shortcuts to improve performance, but instead relies on sheer computing power to try all possibilities until the solution to a problem is found. A classic example is the traveling salesman problem (TSP).

// Mild/Applicable approach:
function aVeryBigSum0 (ar) {
	let storeArSum = ar.reduce(function (accumulator, currentValue) {
		return accumulator + currentValue;
	});
	return storeArSum;
}
console.log('aVeryBigSum0', aVeryBigSum0([ 13, 5, 7 ]));

// OR
const reducer = function (accumulator, currentValue) {
	return accumulator + currentValue;
};
function aVeryBigSum1 (ar) {
	let storeArSum = ar.reduce(reducer);
	return storeArSum;
}
console.log('aVeryBigSum1', aVeryBigSum1([ 5, 5, 7 ]));

// More short-cut:
const aVeryBigSum2 = (ar) => ar.reduce((a, b) => a + b, 0);
// or ar.reduce((total, currentValue) => total + currentValue, 0);
console.log('aVeryBigSum2', aVeryBigSum2([ 5, 5, 3 ]));

// **The reduce() method executes a reducer function (that you provide) on each element of the array (loop through it), resulting in a single output value.**

// For more: https://www.youtube.com/watch?v=g1C40tDP0Bk
