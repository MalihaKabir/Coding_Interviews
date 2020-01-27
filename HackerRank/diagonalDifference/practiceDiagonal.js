// Brute force approach:
// function diagonalDifference(arr) {
//     return Math.abs((arr[0][0]+arr[1][1]+arr[2][2]) - (arr[0][2]+arr[1][1]+arr[2][0]))
// }

// console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, - 12]]));

// Good one!
function diagonalDiff (arr) {
	let n = arr.length;
	let leftDSum = 0;
	let rightDSum = 0;
	for (let i = 0; i < n; i++) {
		leftDSum += arr[i][i];
		rightDSum += arr[n - 1 - i][i];
	}
	return Math.abs(leftDSum - rightDSum);
}
console.log('diagonalDiff', diagonalDiff([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]));

// 2:
function diagonalDifference1 (arr) {
	let n = arr.length;
	let diff = 0;
	// here, (n-1)/2 = (3-1)/2 = 2/2 = 1. So, i < 1. And that means, this loop runs only once while i = 0 and less than 1, of course.
	for (let i = 0; i < (n - 1) / 2; i++) {
		let leftDSum = 0;
		let rightDSum = 0;
		leftDSum += arr[i][i] + arr[n - 2 - i][n - 2 - i] + arr[n - 1 - i][n - 1 - i];
		// leftDSum += 11 + 5 + (-12) = 16 - 12 = 4
		console.log('leftDSum', leftDSum); // check
		rightDSum += arr[i][n - 1 - i] + arr[n - 2 - i][n - 2 - i] + arr[n - 1 - i][i];
		// rightDSum += 4 + 5 + 10 = 19
		console.log('rightDSum', rightDSum);
		diff += leftDSum - rightDSum;
		// diff += 4 - 19 = -15
		console.log('diff', diff);
	}
	return Math.abs(diff);
}
console.log('diagonalDifference1', diagonalDifference1([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]));

// Another one(Don't like it but might be the best one so far):
function diagonalDifference2 (arr) {
	let n = arr.length;
	let diff = 0;
	for (let i = 0; i < n / 2; i++) {
		diff += arr[i][i] + arr[n - 1 - i][n - 1 - i] - arr[i][n - 1 - i] - arr[n - 1 - i][i];
	}
	return Math.abs(diff);
}
console.log(diagonalDifference2([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]));

// Dissecting:
function diagonalDifference3 (arr) {
	let n = arr.length;
	let diff = 0;
	// in the case of 3D Matrix, n/2 means the loop will run only once.
	for (let i = 0; i < n / 2; i++) {
		diff += arr[i][i] + arr[n - i - 1][n - i - 1] - arr[i][n - i - 1] - arr[n - i - 1][i];
		// diff += (i0 i0 + i2 i2 - i0 i2 - i2 i0);
		// diff += (11 + (-12) - 4 - 10);
		console.log('Level Zero Confusion', arr[i][i]);
		console.log('First Confusion 0', arr[n - i - 1]);
		console.log('First Confusion 1', arr[n - i - 1][n - i - 1]);
		console.log('Second Confusion', arr[i][n - i - 1]);
		console.log('Third Confusion', arr[n - i - 1][i]);
		console.log('WHOLE Confusion 0', arr[i][i] + arr[n - i - 1][n - i - 1]);
		console.log('WHOLE Confusion 1', arr[i][n - i - 1] - arr[n - i - 1][i]);
		console.log('WHOLE Confusion 2', arr[i][i] + arr[n - i - 1][n - i - 1] - arr[i][n - i - 1] - arr[n - i - 1][i]);
	}
	return Math.abs(diff);
}
console.log(diagonalDifference3([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]));
