function solution(n: number) {
    let res = 0;

    for (let i = 0; i < 32; i++) {
        res = (res << 1) | (n & 1);
        n >>>= 1; // unsigned right shift
    }

    return res >>> 0; // unsigned로 변환
}

console.log(solution(parseInt("00000000000000000000000000010101", 2)));