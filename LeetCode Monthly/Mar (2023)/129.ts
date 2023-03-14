//https://leetcode.com/problems/sum-root-to-leaf-numbers

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

function sumNumbers(root: TreeNode | null): number {
  let sum = 0

  function traverse(node: TreeNode | null, pathValues: number[]) {
    if (!node.left && !node.right) {
      return (sum += Number([...pathValues, node.val].join('')))
    }

    if (node.left) traverse(node.left, [...pathValues, node.val])
    if (node.right) traverse(node.right, [...pathValues, node.val])
    return
  }

  if (root.left) traverse(root.left, [root.val])
  if (root.right) traverse(root.right, [root.val])
  if (!root.left && !root.right) return root.val
  return sum
}
