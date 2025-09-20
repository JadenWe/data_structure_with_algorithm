/**
	url: https://neetcode.io/problems/is-anagram?list=blind75
	time complexity: O(nlogn + mlogm)
*/
function solution1(s: string, t: string) {
	const sortedS = s.split("").sort().join("");
	const sortedT = t.split("").sort().join("");

	return sortedS === sortedT; 
}

console.log(solution1("racecar", "carrace"));
console.log(solution1("jar", "jam"));


/**
	time complexity: O(n + m)
*/
function solution2(s: string, t: string) {
	if (s.length !== t.length) return false;

	const countS = {};
	const countT = {};

	for (let i = 0; i < s.length; i ++) {
		// number initialize in each index
		countS[s[i]] = (countS[s[i]] || 0) + 1;  
		countT[t[i]] = (countT[t[i]] || 0) + 1;  
	} 

	// comparing
	for (const key in countS) {
		if (countS[key] != countT[key]) return false;
	}


	return true;	
}

console.log(solution2("racecar", "carrace"));
console.log(solution2("jar", "jam"));
