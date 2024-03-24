/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(list1, list2) {
    const dummy = new ListNode(); 
    let current = dummy; 
    let ptr1 = list1;
    let ptr2 = list2;

    while (ptr1 !== null && ptr2 !== null) {
        if (ptr1.val < ptr2.val) { 
            current.next = ptr1;
            ptr1 = ptr1.next;
        } else {
            current.next = ptr2;
            ptr2 = ptr2.next;
        }
        current = current.next; 
    }


    if (ptr1 !== null) {
        current.next = ptr1;
    } else {
        current.next = ptr2;
    }

    return dummy.next; 
}