const arrayOfHrGlass = [
	[ 1, 1, 1, 0, 0, 0 ],
	[ 0, 1, 0, 0, 0, 0 ],
	[ 1, 1, 1, 0, 0, 0 ],
	[ 0, 0, 2, 4, 4, 0 ],
	[ 0, 0, 0, 2, 0, 0 ],
	[ 0, 0, 1, 2, 4, 0 ],
];

function maxOfHrGlassSum (arr) {
	let maxSum = [];
	for (let i = 0, n = arr.length - 3; i <= n; i++) {
		for (let j = 0, m = arr.length - 3; j <= m; j++) {
			let hourGlassSum =
				arr[i][j] +
				arr[i][j + 1] +
				arr[i][j + 2] +
				arr[i + 1][j + 1] +
				arr[i + 2][j] +
				arr[i + 2][j + 1] +
				arr[i + 2][j + 2];
			maxSum.push(hourGlassSum);
		}
	}
	console.log(Math.max(...maxSum));
}

maxOfHrGlassSum(arrayOfHrGlass);
