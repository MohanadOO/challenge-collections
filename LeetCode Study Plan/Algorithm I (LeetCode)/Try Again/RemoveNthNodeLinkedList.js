//https://leetcode.com/problems/remove-nth-node-from-end-of-list/
//Medium

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//Solution Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/2255219/Two-pointers-or-Easy-to-understand-or-JavaScript-or-TC-O(n)-or-SC-(1)

let removeNthFromEnd = function (head, n) {
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

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2))
