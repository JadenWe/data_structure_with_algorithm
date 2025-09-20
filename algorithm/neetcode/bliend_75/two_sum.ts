/**
	url: https://neetcode.io/problems/two-integer-sum?list=blind75
	time complexity: O(n2) 
*/
function solution1(nums: number[], target: number) {
	const result: number[] = [];
	
	for (let i = 0; i < nums.length; i ++) {
		for (let j = i + 1; j < nums.length; j ++) {
			if ((nums[i] + nums[j]) === target) {
				result.push(i, j);
			}	
		}	
	}

	return result;
}


console.log(solution1([3,4,5,6], 7));
console.log(solution1([4,5,6], 10));
console.log(solution1([5,5], 10));

// time complexity: O(n)
function solution2(nums: number[], target: number) {
	const result = new Map();

	for (let i = 0; i < nums.length; i ++) {
		const diff = target - nums[i];

		if (result.has(diff)) {
			return [result.get(diff), i];
		}

		result.set(nums[i], i);
	}

	return [];
}

console.log(solution2([3,4,5,6], 7));
console.log(solution2([4,5,6], 10));
console.log(solution2([5,5], 10));
