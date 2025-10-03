function solution(n: number) {
    const result = [];

    for (let i = 0; i <= n; i++) {
        const bits = i.toString(2).split('0').join('').length;
        result.push(bits);
    }

    return result;
}

console.log(solution(4));