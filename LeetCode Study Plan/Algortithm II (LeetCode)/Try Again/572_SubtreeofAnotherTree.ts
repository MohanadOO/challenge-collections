//https://leetcode.com/problems/subtree-of-another-tree/
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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!subRoot) return true
  if (!root) return false

  if (isSameTree(root, subRoot)) return true

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

function isSameTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root && !subRoot) return true
  if (!root || !subRoot || root.val !== subRoot.val) return false

  return (
    isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)
  )
}

console.log(isSubtree([3, 4, 5, 1, 2], [4, 1, 2]))
