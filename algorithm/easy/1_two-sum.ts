/**
 * Time complexity: O(n^2)
 */

function twoSum(nums: number[], target: number): number[] {
    const result: number[] = [];

    // loops nums array
    for (let i = 0; i < nums.length; i ++) { // O(n)
        // loops nums next element
        for (let j = i + 1; j < nums.length; j ++) { // 0(n)
            // check the sum of two numbers with i and j
            if (nums[i] + nums[j] === target) {
                result.push(i, j);
                return result;
            }
        }
    }

    return result;
};

/**
 * solution using Map
 * Time complexity: O(n)
 */
function twoSum2(nums: number[], target: number): number[] {
    const resultMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i ++) {
        // calculate the remaining number
        const remaining = target - nums[i];

        // return if two sum is matched the target
        if (resultMap.has(remaining)) {
            return [resultMap.get(remaining)!, i];
        };     

        resultMap.set(nums[i], i);
    }

    return [];
}


console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 4, 11, 15 ,25, 35, 100, 101], 105));
console.log('--------------')
console.log(twoSum2([2,7,11,15], 9));
console.log(twoSum2([3,2,4], 6));
console.log(twoSum2([3, 3], 6));
console.log(twoSum2([3, 4, 11, 15 ,25, 35, 100, 101], 105));