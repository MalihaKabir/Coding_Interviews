// Without Built In Method:
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

function maxOfHrGlassSum (arr) {
	let maxSum = [];
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
			// adding in the array
			maxSum.push(hourGlassSum);
		}
	}
	return maxSum;
}

function largestSum (arr) {
	
	let sum = -63;
	for (let i = 0, n = arr.length; i < n; i++) {
		// just in case sum is null or something else...
		if (!sum) {
			sum = arr[i];
		}
		if (sum < arr[i]) {
			sum = arr[i];
		}
	}

	console.log(sum);
}

largestSum(maxOfHrGlassSum(arrayOfHrGlass)); // expected ans is 0 (zero)
console.log(maxOfHrGlassSum(arrayOfHrGlass));
