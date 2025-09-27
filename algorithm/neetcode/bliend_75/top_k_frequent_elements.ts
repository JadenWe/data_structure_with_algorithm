/**
 * url: https://neetcode.io/problems/top-k-elements-in-list?list=blind75
 * time complexity: O()
 */
function solution(nums: number[], k: number) {
    const count: Record<number, number> = {}

    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    const array = Object.entries(count).map(([number, frequent]) => [frequent, parseInt(number)]);
    array.sort((a, b) => b[0] - a[0]);

    return array.slice(0, k).map((pair) => pair[1]);
}