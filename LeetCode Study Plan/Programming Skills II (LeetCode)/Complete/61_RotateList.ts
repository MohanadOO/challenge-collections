//https://leetcode.com/problems/rotate-list/?envType=study-plan&id=programming-skills-ii
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (k === 0) return head

  let copy = head
  let result = head

  let headLength: number = 0
  const nodeValues: number[] = []

  while (copy !== null) {
    nodeValues.push(copy.val)
    copy = copy.next
    headLength++
  }

  let rotateBy = k % headLength
  while (head !== null) {
    while (rotateBy !== 0) {
      const lastValue = nodeValues.pop()
      nodeValues.unshift(lastValue)
      rotateBy--
    }
    head.val = nodeValues.shift()
    head = head.next
  }

  return result
}
