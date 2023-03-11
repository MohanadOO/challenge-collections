//https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/

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
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedListToBST(head: ListNode | null): TreeNode | null {
  let curr = head
  let count = 0

  while (curr) {
    curr = curr.next
    count++
  }

  function buildTree(i: number, j: number) {
    if (i > j) return null
    const mid = Math.floor((i + j) / 2)
    let node = new TreeNode()

    node.left = buildTree(i, mid - 1)
    node.val = curr.val
    curr = curr.next
    node.right = buildTree(mid + 1, j)
    return node
  }

  curr = head
  return buildTree(1, count)
}
