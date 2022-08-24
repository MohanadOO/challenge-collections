//https://leetcode.com/problems/reverse-linked-list/
//Easy

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head.next) return head

  let start = head
  let count = 0
  while (start.next) {
    start = start.next
    count++
  }
  let reverse = head
  while (count !== 0) {
    reverse = start.next
  }
}

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

//Iterative
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  let curr = head
  let next = null

  while (curr !== null) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}

//Recursive
function reverseListRecursive(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head

  let reverseListHead = reverseList(head.next)

  head.next.next = head
  head.next = null

  return reverseListHead
}
