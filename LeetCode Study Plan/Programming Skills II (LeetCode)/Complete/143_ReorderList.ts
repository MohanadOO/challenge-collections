//https://leetcode.com/problems/reorder-list/?envType=study-plan&id=programming-skills-ii
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let curr = head
  const headValues: number[] = []

  while (curr !== null) {
    headValues.push(curr.val)
    curr = curr.next
  }

  while (head !== null) {
    head.val = headValues.shift()
    head = head.next
    if (head !== null) {
      head.val = headValues.pop()
      head = head.next
    }
  }
}

console.log(reorderList([1, 2, 3, 4]))
