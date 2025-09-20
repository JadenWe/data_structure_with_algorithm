/**
	url: https://neetcode.io/problems/duplicate-integer?list=blind75
	time complexity: O(n)
*/
function solution1(nums: number[]) {
		let result: boolean = false;
		const temp = new Map();

		for (let i = 0; i < nums.length; i ++) {
			if (!temp.get(nums[i])) temp.set(nums[i], true);
			else {
				result = true;
				break;
			} 
		}
		
		return result;
}

console.log(solution1([1, 2, 3, 3]));
console.log(solution1([1, 2, 3, 4]));

// time complexity: O(n)
function solution2(nums: number[]) {
	return new Set(nums).size < nums.length;;
}

console.log(solution2([1, 2, 3, 3]));
console.log(solution2([1, 2, 3, 4]));

