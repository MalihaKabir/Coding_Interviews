function compareTriplets (a, b) {
	let a1 = 0;
	let b1 = 0;
	let arr = [];

	for (let i = 0; i < a.length; i++) {
		if (a[i] > b[i]) {
			a1++;
			arr[0] = a1;
			arr[1] = b1;
		} else if (a[i] < b[i]) {
			b1++;
			arr[0] = a1;
			arr[1] = b1;
		} else if (a[i] === b[i]) {
			a1 += 0;
            b1 += 0;
            arr[0] = a1;
            arr[1] = b1;
		}
	}
	return arr;
}

compareTriplets([ 1, 2, 3 ], [ 1, 2, 3 ]);
