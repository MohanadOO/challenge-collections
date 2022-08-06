//https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
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

function getDecimalValue(head: ListNode | null): number {
  const binaryValue = [head.val]

  while (head.next !== null) {
    head = head.next
    binaryValue.push(head.val)
  }
  return convertToDecimal(binaryValue)
}

function convertToDecimal(binaryValue: number[]) {
  let result: number = 0
  for (let i = 0; i < binaryValue.length; i++) {
    result += Math.pow(binaryValue[i] * 2, binaryValue.length - i - 1)
  }

  if (binaryValue[binaryValue.length - 1] === 0) result--
  return result
}
