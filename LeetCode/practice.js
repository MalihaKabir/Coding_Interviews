// [N.B: None of these below solution meets actual question's condition.]
const nums = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ];
// const nums = [ 1, 1, 2 ];

// my first attempt:
// function removeDuplicates0 (nums) {
// 	uniqueArr = [];
// 	for (let i = 0, n = nums.length; i < n - 1; i++) {
// 		if (nums[i] === nums[i + 1]) {
// 			delete nums[i];
// 		}
// 		i++;
// 		uniqueArr.push(nums[i]);
// 	}
// 	return uniqueArr;
// }
// console.log('removeDuplicates0 ', removeDuplicates0(nums));

// with a method:
// function removeDuplicates1 (nums) {
// 	let remDuplicates = [];
// 	for (let i = 0; i < nums.length; i++) {
// 		if (remDuplicates.indexOf(nums[i]) === -1) {
// 			remDuplicates.push(nums[i]);
// 		}
// 	}
// 	return remDuplicates;
// }
// console.log('removeDuplicates1 ', removeDuplicates1(nums));

// short cut solution with spread method:
function removeDuplicates2 (nums) {
	let dupArr = [ ...new Set(nums) ];
	return dupArr;
}
console.log('removeDuplicates2 ', removeDuplicates2(nums));
