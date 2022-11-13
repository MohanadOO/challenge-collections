//https://leetcode.com/problems/add-two-numbers/
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 && !l2) return null
  if (!l1) return l2
  if (!l2) return l1

  let current = new ListNode(0)
  let result = current

  let sum = 0
  let carry = 0

  while (l1 !== null || l2 !== null || carry !== 0) {
    sum = 0
    sum += carry
    if (l1 !== null) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2 !== null) {
      sum += l2.val
      l2 = l2.next
    }

    carry = Math.floor(sum / 10)
    sum = sum % 10

    result.next = new ListNode(sum)
    result = result.next
  }

  return current.next
}

//This Solution Works
function addTwoNumbers1(
  l1: ListNode | null,
  l2: ListNode | null,
  carryOver: number = 0
): ListNode | null {
  if (l1 === null && l2 === null) {
    return carryOver === 0 ? null : new ListNode(carryOver)
  }

  const currentSum = (l1?.val || 0) + (l2?.val || 0) + carryOver
  return new ListNode(
    currentSum % 10,
    addTwoNumbers1(
      l1?.next || null,
      l2?.next || null,
      (currentSum / 10) >> 0 // slightly faster than Math.floor(currentSum/10)
    )
  )
}