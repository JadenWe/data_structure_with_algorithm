/**
 * time complexity: O(n)
 * space complexity: O(1)
 */
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    const size = flowerbed.length; 

    for (let i = 0; i < size; i ++ ) {
        // declare left and right and check if they are empty
        let left = i === 0 || flowerbed[i - 1] === 0;
        let right = i === size - 1 || flowerbed[i + 1] === 0;

        // check if the current position is empty and the left and right are empty
        if (left && right && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }
    
    // return true if n is less than or equal to 0
    return n <= 0;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1));
console.log(canPlaceFlowers([1,0,0,0,1], 2));
console.log(canPlaceFlowers([1,0,0,0,0,0,0,0,1], 3));