//https://leetcode.com/problems/minimum-distance-between-bst-nodes/description/

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

function minDiff(root: TreeNode | null): number {
  // With List
  return minDiffInBST1(root)
  // No List
  return minDiffInBST2(root)
}

function minDiffInBST1(root: TreeNode | null): number {
  let minDiff: number = Infinity
  let list: number[] = []

  orderList(root)
  function orderList(node: TreeNode | null) {
    if (!node) return
    orderList(node.left)
    list.push(node.val)
    orderList(node.right)
  }

  for (let i = 1; i < list.length; i++) {
    minDiff = Math.min(minDiff, list[i] - list[i - 1])
  }

  return minDiff
}

function minDiffInBST2(root: TreeNode | null): number {
  let minDiff: number = Infinity
  let preValue: TreeNode = null

  function orderList(node: TreeNode | null) {
    if (node === null) return

    orderList(node.left)

    if (preValue !== null) {
      minDiff = Math.min(minDiff, node.val - preValue.val)
    }
    preValue = node

    orderList(node.right)
  }

  orderList(root)
  return minDiff
}
