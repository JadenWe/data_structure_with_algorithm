/**
 * time complexity: O(n)
 * space complexity: O(n)
 */
function removeStars(s: string): string {
    let result: string[] = [];
    const wordLength = s.length;
    
    for (let i = 0; i < wordLength; i ++) {
        if (s[i] !== "*") result.push(s[i]);
        else result.pop();
    }

    return result.join("");
};

console.log(removeStars("leet**cod*e"));
console.log(removeStars("erase*****"));
