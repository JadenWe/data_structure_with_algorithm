/**
    Time complexity: O(n*m)
 */
function findWords(words: string[]): string[] {
    const checkRows: Record<number, string> = {1: "qwertyuiop", 2: "asdfghjkl", 3: "zxcvbnm"};
    const boardMap: Record<string, string> = {};

    // each character with row number setting into the boardMap
    for (const row in checkRows) {
        [...checkRows[row]].forEach(char => {
            boardMap[char] = row;
        });
    }

    // declare result array
    const result: string[] = [];

    // iterate over each word from the parameter
    for (const word of words) {
        const lowerCasedChars = word.toLowerCase().split(""); // split and lower each word 0(n)
        const referenceRow = boardMap[lowerCasedChars[0]]; 
        const isSameRow = lowerCasedChars.every(char => boardMap[char] === referenceRow); // check if all characters are in the correct row

        if (isSameRow) result.push(word);
    }

    return result;
}
