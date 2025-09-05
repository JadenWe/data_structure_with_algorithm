// testing arrays
const smArr = [5, 3, 2, 35, 2];
const bigArr = [5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2];

class Timer {
    startTime: number;
    endTime: number;

    start() {
        this.startTime = performance.now();
    }

    end() {
        this.endTime = performance.now();
        this.printPerformance();
        this.init();
    }

    init() {
        this.startTime = 0;
        this.endTime = 0;
    }

    printPerformance() {
        console.log(`Time: ${this.endTime - this.startTime}`);
    }
}
/**
 * O(1)
 * 
 * This is the ideal, no matter how many items there are, whether one or one million, the amount of time to complete will remain the same.
 * Most operations that perform a single operation are O(1). Pushing to an array, getting an item at a particular index adding a child element, etc, will all take the same amout of time regardless of the array length.
 */
const timer = new Timer();

timer.start();
smArr.push(27);
timer.end();

timer.start();
bigArr.push(27);
timer.end();

/**
 * O(n)
 * 
 * By default, all loops are an example of linear growth because there is a one-to one relationship the data size and time to completion.
 * So, an array with 1,000 items more items will take exactly 1,000 itmes longer.
 */
timer.start();
smArr.forEach(item => console.log(item));
timer.end();

timer.start();
bigArr.forEach(item => console.log(item));
timer.end();

/**
 * O(n^2)
 * 
 * Exponential growth is a trap we've all fall into at least once.
 * Need to find a matching pair for each item in an array?
 * Putting a loop inside a loop is great way of turning an array of 1,000 items into a million operation search that'll freeze your browser.
 * It's always better to have to do 2,000 operations over two separate loops than a million with two nested loops.
 */
timer.start();
smArr.forEach(() => {
    smArr.forEach(item => console.log(item));
});
timer.end();

bigArr.forEach(() => {
    bigArr.forEach(item => {console.log(item)});
});
timer.end();

/**
 * O(log n)
 * 
 * The best analogy I've heard to understand logarithmic growth is to imagine looking up a word like 'notation' in a dictionary.
 * You can't search one entry after the other, instead you find the 'N' section, then maybe the 'OPQ' page, then search down the list alphabetically until you find a match.
 * 
 * With this 'divide-and-conquer' approach, the amount of time to find something will still change depending on the dictionary but at nowhere near the rate of O(n).
 * Because it searches in progressively more specific sections without looking at most of the data, a search through a thousand items may take less than 10 operations while a million may take less than 20, getting you the most bang for your buck.
 */

const sort = array => {
    if (array.length < 2) return array;

    let pivot = array[0];
    let left: number[] = [];
    let right: number[] = [];
    let arraySize = array.length;
    
    for (let i = 1; i < arraySize; i ++) {
        if (array[i] < pivot) left.push(array[i]);
        else right.push(array[i]);
    }

    return [ ...sort(left), pivot, ...sort(right)];
}

timer.start();
sort(smArr);
timer.end();

timer.start();
sort(bigArr);
timer.end();


/**
 * O(n!)
 * 
 * Finally, one of the worst possibilities, factorial growth.
 * The textbook example of this is the travelling salesman problem.
 * If you have a bunch of cities of varying distance, how do you find the shortest possible route that goes between all of them and returns to the starting point?
 * The brute force method would be to check the distance between every possible configuration between each city, which would be a factorial and quickly get our of hand.
 * 
 * Since that problem gets very complicated very quickly, we'll demonstrate this complexity with a short recursive function.
 * This function will multiply a number by its own function taking in itself minus one.
 * Every digit in our factorial will run its own function until it reaches 0, with each recursive layer adding its product to our original number.
 * So 3 is multiplied by 2 that runs the function to be multiplied by 1 that runs it again to be stopped at 0, returning 6.
 * Recursion gets confusing like this pretty easily.
 * 
 * A factorial is just the product of every number up to that number. So 6! is 1x2x3x4x5x6 = 720.
 */

const factorial = n => {
    let num = n;

    if (num == 0) return 1;

    for (let i = 0; i < n; i ++) {
        num = n * factorial(n - 1);
    };

    return num;
}

timer.start();
factorial(1);
timer.end();

timer.start();
factorial(5);
timer.end();

timer.start();
factorial(10);
timer.end();

timer.start();
factorial(12);
timer.end();
