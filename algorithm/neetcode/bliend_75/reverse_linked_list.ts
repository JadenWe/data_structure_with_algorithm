/**
 * url: https://neetcode.io/problems/reverse-a-linked-list?list=blind75
 * time complexity: O(n)
 */
class ListNode {
    public val: number;
    public next: null | ListNode;

    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function solution(head: number[]) {
    let previous = null;
    let current: any = head;

    while (current) {
        let temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }

    return previous;
}

console.log(solution([0, 1, 2, 3]));
console.log(solution([]));