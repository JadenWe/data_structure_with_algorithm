function solution(nums: number[]): number {
    let result: number = 0;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i != nums[i]) {
            result = i;
            break;
        }
    }

    return result;
}

console.log(solution([1, 2, 3]));
console.log(solution([0, 2]));
console.log(solution([0, 1]));