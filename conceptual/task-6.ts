const makeSum = (...nums: number[]): number => {
	return nums.reduce((total, num) => total + num, 0);
};

console.log(makeSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 101));
