// formula of getting prime numbers:
// first, square-root(√) the given num,
// second, then round the given number up to the next largest whole number or integer and set that as the limit of your loop.
// So, the code for this is:
// const limit = Math.ceil(Math.sqrt(num));

// Since prime numbers divide only by 1 and itself, so the loop will start from 2 as every number is divided by 1. So, there's no need to start from 1.
// Within this range/limit you'll find out whether the num is prime or not. So, in math, if you check num: 31 is prime or not, you'll square-root 31:
// √31 = 5.56776 or 6. So, you're taking only 6 as it's limit to check. So, you'll check this number 5times(2 to 6) or till you get to number 6.
// 31 / 2 = 15.5 ; the ans isn't an integer, it's a floating num
// 31 / 3 = 10.33 ; still a float num.
// 31 / 4 = 7.75 ; still a float num.
// 31 / 5 = 6.2 ; still a float num.
// 31 / 6 = 5.167 ; and still a float num.
// This means, 31 is a prime number!

// Now, let's check this one:
// √33 = 5.74 or 6
// 33 / 2 = 16.5
// 33 / 3 = 11 ; now this is an integer, not a float.
// So, we've got that 33 is not a prime number.

// Now let's write this in code:
// (N.B. given num/integer must be positive.)
const primeNum = (num) => {
	const limit = Math.ceil(Math.sqrt(num));
	for (i = 2; i <= limit; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
};
primeNum(31);
