function solution(n: any): number {
    return n.toString(2).split('0').join('').length;
}

console.log(solution('00000000000000000000000000010111'));
console.log(solution('01111111111111111111111111111101'));