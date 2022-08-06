//https://leetcode.com/problems/middle-of-the-linked-list/
//Easy

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

function middleNode(head: ListNode | null): ListNode | null {
  if (head === null) return null
  let listLength = 1
  let middleHead = head
  while (head.next !== null) {
    head = head.next
    listLength++
  }

  let middle = Math.floor(listLength / 2)
  for (let i = 0; i < middle; i++) {
    middleHead = middleHead.next
  }

  return middleHead
}

//Another Solution
function middleNode(head: ListNode | null): ListNode | null {
  if (head === null) return null
  let middleHead = head
  while (head !== null && head.next !== null) {
    middleHead = middleHead.next
    head = head.next.next
  }
  return middleHead
}
