/**
 * time complexity: O(n)
 * space complexity: O(n)
 */
function mergeAlternately(word1: string, word2: string): string {
    let result = '';
    // get length of the longest word from two words
    let length = Math.max(word1.length, word2.length);

    // loop through two words
    for (let i = 0; i < length; i++) {

        // if the current index is less than the length of the first word, and set the result to the current character of the first word
        if (i < word1.length) {
            result += word1[i];
        }
        
        // if the current index is less than the length of the second word, and set the result to the current character of the second word
        if (i < word2.length) {
            result += word2[i];
        }
    }

    return result;
};

console.log(mergeAlternately('abc', 'pqr'));
console.log(mergeAlternately('ab', 'pqrs'));
console.log(mergeAlternately('abc', 'defghi'));