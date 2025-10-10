/**
 * url: https://neetcode.io/problems/merge-two-sorted-linked-lists?list=blind75
 * time complexity: O(n + m)
 */
function solution1(list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }

    if (list1.val <= list2.val) {
        list1.next = solution1(list1.next, list2);
        return list1;
    } else {
        list2.next = solution1(list1, list2.next);
        return list2;
    }
}

/**
 * url: https://neetcode.io/problems/merge-two-sorted-linked-lists?list=blind75
 * time complexity: O(n + m)
 */
function solution2(list1, list2) {
    let dummy = { val: 0, next: null };
    let node = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            node.next = list1;
            list1 = list1.next;
        } else {
            node.next = list2;
            list2 = list2.next;
        }

        node = node.next;
    }

    node.next = list1 ? list1 : list2;

    return dummy.next;
}

console.log(solution1([1, 2, 4], [1, 3, 5]));
console.log(solution1([], [1, 2]));
console.log(solution1([], []));

console.log(solution2([1, 2, 4], [1, 3, 5]));
console.log(solution2([], [1, 2]));
console.log(solution2([], []));