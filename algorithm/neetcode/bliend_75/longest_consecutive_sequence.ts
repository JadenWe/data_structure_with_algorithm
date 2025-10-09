function solution(nums: number[]): number {
    const sets = new Set(nums);
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!sets.has(nums[i] - 1)) {
            let length = 1;

            while (sets.has(nums[i] + length)) {
                length++;
            }

            result = Math.max(result, length);
        }
    }

    return result;
}

console.log(solution([2, 20, 4, 10, 3, 4, 5]));
console.log(solution([0, 3, 2, 5, 4, 6, 1, 1]));
console.log(solution([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));