//https://leetcode.com/problems/middle-of-the-linked-list/
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

//Solution From LeetCode
function middleNodeLeetCode(head) {
  let A = [head]
  while (A[A.length - 1].next != null) {
    A.push(A[A.length - 1].next)
  }
  return A[Math.trunc(A.length / 2)]
}


function middleNode(head: ListNode | null): ListNode | null {
  if (head === null) return null

  let middleHead = head
  let len = 1

  while (head.next) {
    head = head.next
    len++
  }

  let middle = Math.floor(len / 2)
  while (middle !== 0) {
    middleHead = middleHead.next
    middle--
  }

  return middleHead
}
