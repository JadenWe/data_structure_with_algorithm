// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * time Complexity: O(n+m)
 * space complexity: O(1)
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // merge two lists
    const mergeTwoLists = new ListNode(0);
    let current = mergeTwoLists;

    while (list1 && list2) {
        // compare two numbers in two lists and setting in the current list
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next
        }

        current = current.next;
    }

    // append remaining nodes from list1 or list2
    current.next = list1 || list2;

    return mergeTwoLists.next;
};


function printList(head: ListNode | null): void {
    let current = head;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
}

console.log("Test Case 1:");

const test11 = new ListNode();
test11.next = new ListNode(2);
test11.next.next = new ListNode(4);

const test12 = new ListNode(1);
test12.next = new ListNode(3);
test12.next.next = new ListNode(4);

const result = mergeTwoLists(test11, test12);
printList(result);
