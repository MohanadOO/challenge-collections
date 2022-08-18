//https://leetcode.com/problems/remove-nth-node-from-end-of-list/
//Medium

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

//Useful => https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/1164542/JS-Python-Java-C%2B%2B-or-Easy-Two-Pointer-Solution-w-Explanation

//Solution Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/2255219/Two-pointers-or-Easy-to-understand-or-JavaScript-or-TC-O(n)-or-SC-(1)
let removeNthFromEndLeetCode = function (head, n) {
  let start = head
  while (n--) {
    start = start.next
  }

  if (!start) return head.next

  let end = head
  while (start.next) {
    start = start.next
    end = end.next
  }
  end.next = end.next.next

  return head
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let start = head
  while (n !== 0) {
    start = start.next
    n--
  }

  if (!start) return head.next

  let end = head
  while (start.next) {
    start = start.next
    end = end.next
  }
  end.next = end.next.next
  return head
}
