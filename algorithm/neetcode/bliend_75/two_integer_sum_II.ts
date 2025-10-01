/**
 * url: https://neetcode.io/problems/two-integer-sum-ii?list=blind75
 * time complexity: O(n)
 */
function solution(numbers: number[], target: number) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum: number = numbers[left] + numbers[right];

        if (sum > target) right--;
        else if (sum < target) left++;
        else return [left + 1, right + 1];
    }

    return [];
}

console.log(solution([1, 2, 3, 4], 3));