/**
 * time complexity: O(n2)
 */
function solution(heights: number[]): number {
    let result: number = 0;

    for (let i = 0; i < heights.length; i++) {
        for (let j = heights.length - 1; j != i; j--) {
            let temp = (j - i) * Math.min(heights[i], heights[j]);
            if (result < temp) result = temp;
        }
    }

    return result;
}

function solution2(heights: number[]): number {
    let result: number = 0;
    let left: number = 0;
    let right: number = heights.length - 1;

    while (left < right) {
        const area = (right - left) * Math.min(heights[left], heights[right]);

        result = Math.max(area, result);

        if (heights[left] <= heights[right]) left++;
        else right--;
    }

    return result;
}


console.log(solution([1, 7, 2, 5, 4, 7, 3, 6]));
console.log(solution([2, 2, 2]));

console.log(solution2([1, 7, 2, 5, 4, 7, 3, 6]));
console.log(solution2([2, 2, 2]));