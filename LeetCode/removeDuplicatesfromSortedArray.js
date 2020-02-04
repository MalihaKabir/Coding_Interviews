/*
Main Solution:
Notes: 
1. Array is sorted,
2. We must do this by modifying the input array in-place. So, no extra space can be allocated.   
*/

// It can be solved with two pointer trick:
const nums = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4 ];
// const nums = [ 1, 1, 2 ];

function removeDuplicates1 (nums) {
	if (nums.length === 0) {
		return 0;
	}
	// index is the first and slow pointer index
	let slowIndex = 0;
	// j is the 2nd or fast pointer.
	// We start looping from index(in loop, it's j) 1, because the 1st element is always unique.
	// Time Complexity: O(n)
	for (let j = 1, n = nums.length; j < n; j++) {
		// So, we'll start checking from the first element to see whether it's same as its previous one or not.
		if (nums[j] !== nums[slowIndex]) {
			// if it's not, then the slow pointer will go to the next pointer
			slowIndex++;
			// then with the help of slow pointer, nums array will take the second element as its own.
			nums[slowIndex] = nums[j];
		}
	}
	return slowIndex + 1;
	// Space Complexity: O(1)
}

console.log(removeDuplicates1(nums));

/*
Remember the given Clarification:

Confused why the returned value is an integer but your answer is an array ?
Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.
*/
