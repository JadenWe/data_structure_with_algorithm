/**
 * time complexity: O(n)
 * space complexity: O(n)
 */

function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = [];

    for (const asteroid of asteroids) {
        // this asteroid is moving to the right
        if (asteroid > 0) {
            stack.push(asteroid);
            continue;
        }

        // this asteroid is moving to the left
        while (true) {
            const last = stack[stack.length - 1];
            
            // if the stack is empty or the last asteroid is moving to the right
            if (!last || last < 0) {
                stack.push(asteroid);
                break;
            }
            
            // if the last asteroid is smaller than the current asteroid, pop the last asteroid
            // the asteroid move to the left
            if (Math.abs(last) < Math.abs(asteroid)) {
                stack.pop();
                continue;
            }
            
            // if the last asteroid is the same size as the current asteroid, pop the last asteroid
            if (Math.abs(last) === Math.abs(asteroid)) {
                stack.pop();
            }

            // if the last asteroid is larger than the current asteroid, break
            break;
        }
    }

    return stack;
}

console.log(asteroidCollision([5, 10, -5]));
console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));