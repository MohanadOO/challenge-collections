//https://leetcode.com/problems/check-completeness-of-a-binary-tree/

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

// LeetCode Official Solution
function isCompleteTree(root: TreeNode | null): boolean {
  function countNodes(node: TreeNode | null): number {
    if (!node) return 0
    return 1 + countNodes(node.left) + countNodes(node.right)
  }

  function dfs(node: TreeNode | null, index: number, count: number): boolean {
    if (!node) return true
    if (index >= count) return false
    return (
      dfs(node.left, 2 * index + 1, count) &&
      dfs(node.right, 2 * index + 2, count)
    )
  }

  return dfs(root, 0, countNodes(root))
}
