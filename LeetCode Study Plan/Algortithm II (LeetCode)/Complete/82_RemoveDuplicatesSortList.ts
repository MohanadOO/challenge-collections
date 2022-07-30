//https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
//   return solutionOne(head)
  //Faster Solution
  return solutionTwo(head)
}

function solutionOne(head: ListNode | null): ListNode | null {
  const pred = new ListNode()
  pred.next = head

  let node = pred //Last node before the list of duplicates

  while (node.next) {
    if (node.next.next && node.next.val === node.next.next.val) {
      let nextNode = node.next.next.next
      while (nextNode && nextNode.val === node.next.val) {
        nextNode = nextNode.next
      }
      node.next = nextNode
    } else {
      node = node.next
    }
  }
  return pred.next
}

function solutionTwo(head: ListNode | null): ListNode | null {
  if (!head) return null

  let newHead: ListNode | null = null
  let prev: ListNode | null = null
  let curr: ListNode | null = head

  while (curr) {
    if (!curr.next || curr.next.val !== curr.val) {
      if (prev) prev.next = curr
      if (!newHead) newHead = curr

      prev = curr
    }

    while (curr.next && curr.next.val === curr.val) {
      curr = curr.next
    }
    if (curr) curr = curr.next
  }

  return newHead
}
