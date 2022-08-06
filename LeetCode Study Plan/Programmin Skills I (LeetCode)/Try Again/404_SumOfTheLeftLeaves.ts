//https://leetcode.com/problems/sum-of-left-leaves/
//Easy

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

function sumOfLeftLeaves(
  root: TreeNode | null,
  isLeft: boolean = false
): number {
  if (!root) return 0
  if (!root.left && !root.right && isLeft) return root.val

  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false)
}
