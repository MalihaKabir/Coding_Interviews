
// Elevanagram(20pts, 27pts)

// Practice Submissions
// You have not attempted this problem.
// Last updated: Nov 17 2019, 12: 42

// Problem
// It is a well known fact that a number is divisible by 11 if and only if the alternating sum of its digits is equal to 0 modulo 11. For example, 8174958 is a multiple of 11, since 8 - 1 + 7 - 4 + 9 - 5 + 8 = 22.

// Given a number that consists of digits from 1 - 9, can you rearrange the digits to create a number that is divisible by 11 ?

//     Since the number might be quite large, you are given integers A1, A2, ..., A9.There are Ai digits i in the number, for all i.

//         Input
// The first line of the input gives the number of test cases, T.T lines follow.Each line contains the nine integers A1, A2, ..., A9.

//     Output
// For each test case, output one line containing Case #x: y, where x is the test case number(starting from 1) and y is YES if the digits can be rearranged to create a multiple of 11, and NO otherwise.

//     Limits
// Time limit: 20 seconds per test set.
// Memory limit: 1GB.
// 1 ≤ T ≤ 100.
// 1 ≤ A1 + A2 + ... + A9.

// Test set 1(Visible)
// 0 ≤ Ai ≤ 20, for all i.

// Test set 2(Hidden)
// 0 ≤ Ai ≤ 109, for all i.

//     Sample

// Input
 	
// Output

// 6
// 0 0 2 0 0 1 0 0 0
// 0 0 0 0 0 0 0 0 12
// 0 0 0 0 2 0 1 1 0
// 3 1 1 1 0 0 0 0 0
// 3 0 0 0 0 0 3 0 2
// 0 0 0 0 0 0 0 1 0


// Case #1: YES
// Case #2: YES
// Case #3: NO
// Case #4: YES
// Case #5: YES
// Case #6: NO

// In Sample Case #1, the digits are 336, which can be rearranged to 363. This is a multiple of 11 since 3 - 6 + 3 = 0.
// In Sample Case #2, the digits are 999999999999, which is already a multiple of 11, since 9 - 9 + 9 - 9 + ... - 9 = 0.
// In Sample Case #3, the digits are 5578, which cannot be rearranged to form a multiple of 11.
// In Sample Case #4, the digits are 111234, which can be rearranged to 142131. This is a multiple of 11 since 1 - 4 + 2 - 1 + 3 - 1 = 0.
// In Sample Case #5, the digits are 11177799, which can be rearranged to 19191777. This is a multiple of 11 since 1 - 9 + 1 - 9 + 1 - 7 + 7 - 7 = -22(which is 0 modulo 11).
// In Sample Case #6, the only digit is 8, which cannot be rearranged to form a multiple of 11.