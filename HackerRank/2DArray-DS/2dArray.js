// const arrayOfHrGlass = [
// 	[ 1, 1, 1, 0, 0, 0 ],
// 	[ 0, 1, 0, 0, 0, 0 ],
// 	[ 1, 1, 1, 0, 0, 0 ],
// 	[ 0, 0, 2, 4, 4, 0 ],
// 	[ 0, 0, 0, 2, 0, 0 ],
// 	[ 0, 0, 1, 2, 4, 0 ],
// ];

const arrayOfHrGlass = [
	[ -1, 1, -1, 0, 0, 0 ],
	[ 0, -1, 0, 0, 0, 0 ],
	[ -1, -1, -1, 0, 0, 0 ],
	[ 0, -9, 2, -4, -4, 0 ],
	[ -7, 0, 0, -2, 0, 0 ],
	[ 0, 0, -1, -2, -4, 0 ],
];

// with method:
function maxOfHrGlassSum0 (arr) {
	let maxSum = [];
	for (let i = 0, n = arr.length - 3; i <= n; i++) {
		for (let j = 0, m = arr.length - 3; j <= m; j++) {
			// finding the sum
			let hourGlassSum =
				arr[i][j] +
				arr[i][j + 1] +
				arr[i][j + 2] +
				arr[i + 1][j + 1] +
				arr[i + 2][j] +
				arr[i + 2][j + 1] +
				arr[i + 2][j + 2];
			// adding in the array
			maxSum.push(hourGlassSum);
		}
	}

	// finding the max sum from the array
	return Math.max(...maxSum);
}

// or without method
function maxOfHrGlassSum1 (arr) {
	// initiate sum with the minimum possible sum. So, since -9 is the lowest possible element according to given Constraints, then sum is their sum, which is:
	let maxSum = -63;
	for (let i = 0, n = arr.length - 3; i <= n; i++) {
		for (let j = 0, m = arr.length - 3; j <= m; j++) {
			// finding the sum
			let hourGlassSum = 0;
			hourGlassSum += arr[i][j];
			hourGlassSum += arr[i][j + 1];
			hourGlassSum += arr[i][j + 2];
			hourGlassSum += arr[i + 1][j + 1];
			hourGlassSum += arr[i + 2][j];
			hourGlassSum += arr[i + 2][j + 1];
			hourGlassSum += arr[i + 2][j + 2];

			if (maxSum < hourGlassSum) {
				maxSum = hourGlassSum;
			}
		}
	}
	return maxSum;
}

console.log('maxOfHrGlassSum0', maxOfHrGlassSum0(arrayOfHrGlass));
console.log('maxOfHrGlassSum1', maxOfHrGlassSum1(arrayOfHrGlass));
