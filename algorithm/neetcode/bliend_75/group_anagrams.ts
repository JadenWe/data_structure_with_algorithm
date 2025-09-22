/**
	url: https://neetcode.io/problems/anagram-groups?list=blind75 
	time complexity: O(n⋅klogk) 
*/
function solution1(strs: string[]) {
	const result: Record<string, string[]> = {};

	for (let i = 0; i < strs.length; i++) {
		const word: string = strs[i].split('').sort().join('');

		if (!result[word]) result[word] = [];
		result[word].push(strs[i]);
	}

	return Object.values(result);
}

console.log(solution1(["act", "pots", "tops", "cat", "stop", "hat"]));
console.log(solution1(["x"]));
console.log(solution1([""]));
console.log(solution1(["", ""]));


// time complexity: O(m * n)
function solution2(strs: string[]): string[][] {
	const result: Record<string, string[]> = {};

	for (let spelling of strs) {
		const count = new Array(26).fill(0);

		for (let c of spelling) {
			count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
		}

		const key: string = count.join(',');

		if (!result[key]) {
			result[key] = [];
		}

		result[key].push(spelling);
	}

	return Object.values(result);
}


console.log(solution2(["act", "pots", "tops", "cat", "stop", "hat"]));
console.log(solution2(["x"]));
console.log(solution2([""]));
console.log(solution2(["", ""]));
