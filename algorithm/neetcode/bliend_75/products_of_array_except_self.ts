/**
 * url: https://neetcode.io/problems/products-of-array-discluding-self?list=blind75
 * time complexity: O(n)
 */
function solution(nums: number[]): number[] {
    const size = nums.length;
    const result: number[] = new Array(size).fill(1);

    for (let i = 1; i < size; i++) {
        result[i] = result[i - 1] * nums[i - 1];
        console.log(result[i - 1], nums[i - 1]);
    }

    let postfix = 1;

    for (let i = size - 1; i >= 0; i--) {
        result[i] *= postfix;
        postfix *= nums[i];
    }

    return result;
}

function solution2(nums: number[]): number[] {
    // const result: number[] = nums.map((num: number) => {


    // });

    return result;
}

console.log(solution([1, 2, 4, 6]));
console.log(solution([-1, 0, 1, 2, 3]));
