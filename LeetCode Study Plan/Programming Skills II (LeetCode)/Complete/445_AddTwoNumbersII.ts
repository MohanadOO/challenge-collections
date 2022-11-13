//https://leetcode.com/problems/add-two-numbers-ii/
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
  let resultList: number[][] = [[], []]

  while (l1 || l2) {
    if (l1) {
      resultList[0].push(l1.val)
      l1 = l1.next
    }
    if (l2) {
      resultList[1].push(l2.val)
      l2 = l2.next
    }
  }

  let result = new ListNode(0)

  while (resultList[0].length || resultList[1].length) {
    let sum = 0
    if (resultList[0].length) sum += resultList[0].pop()
    if (resultList[1].length) sum += resultList[1].pop()

    sum += result.val
    result.val = sum % 10

    let head = new ListNode(Math.floor(sum / 10))
    head.next = result
    result = head
  }

  return result.val === 0 ? result.next : result
}