function solution(height: number[]): number {
    if (!height || height.length <= 0) return 0; // 빈 배열이면 0 반환

    let result = 0; // total amount of trapped water
    let left = 0; // left pointer
    let right = height.length - 1; // right pointer
    let leftMax = height[left]; // maximum height seen from left so far
    let rightMax = height[right]; // maximum height seen from right so far

    while (left < right) { // until two pointers meet
        if (leftMax < rightMax) { // if leftMax is smaller
            left++; // move left pointer to the right
            leftMax = Math.max(leftMax, height[left]); // update leftMax to the larger value
            result += leftMax - height[left]; // add trapped water at current position
        } else { // if rightMax is smaller or equal
            right--; // move right pointer to the left
            rightMax = Math.max(rightMax, height[right]); // update rightMax value
            result += rightMax - height[right]; // add trapped water at current position
        }
    }

    return result;
}

console.log(solution([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]));