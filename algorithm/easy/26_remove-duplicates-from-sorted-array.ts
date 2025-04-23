/**
 * time complexity: O(n)
 * space complexity: O(n)
 */
function removeDuplicates(nums: number[]): number {
    // change the array to a set to remove duplicates and then change it back to an array
    return [...new Set(nums)].length;
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

/**
 * solution using for loop
 * time complexity: O(nlogn)
 * space complexity: O(1)
 */
function removeDuplicates2(nums: number[]): number {
    if (nums.length === 0) return 0;


    nums.sort((a, b) => a - b);

    // i is the index of the last unique element
    let i = 0;

    // j is the current index
    for (let j = 0; j < nums.length; j ++) {
        // if the current element(j) is not duplicate
        if (nums[i] !== nums[j]) {
            // move the i to the next unique element
            i++;
            
            // store non-duplicated values in current location
            nums[i] = nums[j];
        }
    }

    // return the length of the array and plus 1 because i is the index
    return i + 1;
}

console.log(removeDuplicates2([0,0,1,1,1,2,2,3,3,4]));