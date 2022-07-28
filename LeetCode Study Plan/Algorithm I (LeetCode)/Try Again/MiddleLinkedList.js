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

let middleNode = function (head) {
  let A = [head]
  while (A[A.length - 1].next != null) {
    A.push(A[A.length - 1].next)
  }
  return A[Math.trunc(A.length / 2)]
}

console.log(middleNode([1, 2, 3, 4, 5]))
