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

function preorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return []
  if (root.left === null && root.right === null) return [root.val]

  const results = [root.val]

  function findNode(node: TreeNode | null): number | void {
    if (node === null) return
    results.push(node.val)

    return findNode(node.left) || findNode(node.right)
  }

  findNode(root.left)
  findNode(root.right)

  return results
}
