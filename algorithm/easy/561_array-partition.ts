/**
 * time complicity: O(nlogn)
 * space complicity: O(1)
 */
function arrayPairSum(nums: number[]): number {
     return nums.sort((a, b) => a - b)
        .filter((_, index) => index % 2 === 0)
        .reduce((acc, curr) => acc + curr, 0);
};

console.log(arrayPairSum([1,4,3,2]));
console.log(arrayPairSum([6,2,6,5,1,2]));