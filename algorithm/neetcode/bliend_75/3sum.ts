/**
 * time complexity: O(n2)
 */
function solution(nums: number[]): number[][] {
    const result: number[][] = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left: number = i + 1;
        let right: number = nums.length - 1;

        while (left < right) {
            const sum: number = nums[i] + nums[left] + nums[right];

            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                result.push([nums[i], nums[left], nums[right]]);

                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
            }
        }
    }

    return result;
}


console.log(solution([-1, 0, 1, 2, -1, -4]));
// console.log(solution([0, 1, 1]));
// console.log(solution([0, 0, 0]));