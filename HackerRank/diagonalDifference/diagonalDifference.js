// 3D Matrix/Array -> perfect square.
// My Solution:
function diagonalDifference0 (arr) {
	let n = arr.length;
	let diff = 0;
	for (let i = 0; i < (n - 1) / 2; i++) {
		let leftDSum = 0;
		let rightDSum = 0;
		leftDSum += arr[i][i] + arr[n - 2 - i][n - 2 - i] + arr[n - 1 - i][n - 1 - i];
		rightDSum += arr[i][n - 1 - i] + arr[n - 2 - i][n - 2 - i] + arr[n - 1 - i][i];
		diff += leftDSum - rightDSum;
	}
	return Math.abs(diff);
}
console.log(diagonalDifference0([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]));

// Dissection:
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
console.log(diagonalDifference1([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]));

// The second one is(Good one):
function diagonalDiff0 (arr) {
	let n = arr.length;
	let leftDSum = 0;
	let rightDSum = 0;
	for (let i = 0, j = n - 1; i < n; i++, j--) {
		leftDSum += arr[i][i];
		rightDSum += arr[j][i];
	}
	return Math.abs(leftDSum - rightDSum);
}
console.log('diagonalDiff0', diagonalDiff0([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]));

// Dissecting:
function diagonalDiff1 (arr) {
	let n = arr.length;
	let leftDSum = 0;
	let rightDSum = 0;
	for (let i = 0; i < n; i++) {
		leftDSum += arr[i][i];
		rightDSum += arr[n - 1 - i][i];
	}
	return Math.abs(leftDSum - rightDSum);
}
console.log('diagonalDiff1', diagonalDiff1([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]));
