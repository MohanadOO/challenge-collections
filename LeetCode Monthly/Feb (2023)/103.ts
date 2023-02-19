//https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal

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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  const queue: TreeNode[] | null[] = [root]
  const res: number[][] = []
  let depth = 0

  while (queue.length > 0) {
    const len = queue.length
    const level: number[] = []

    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if (depth % 2 == 0) level.push(node.val)
      else level.unshift(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    depth++
    res.push(level)
  }

  return res
}
