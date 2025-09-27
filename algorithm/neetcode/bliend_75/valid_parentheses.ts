/**
 * time complexity: O(n)
 */
function solution(s: string): boolean {
	if (s.length % 2 != 0 || !s) return false;

	const stack: string[] = [];
	const closeTable: Record<string, string> = {
		"}": "{",
		"]": "[",
		")": "(",
	}

	for (let i = 0; i < s.length; i++) {
		const character: string = s[i];

		if (!closeTable[character]) {
			stack.push(character);
			continue;
		}

		if (stack[stack.length - 1] !== closeTable[character]) return false;
		else stack.pop();
	}

	return stack.length == 0;
}

console.log(solution("[]"));
console.log(solution("([{}])"));
console.log(solution("[(])"));
