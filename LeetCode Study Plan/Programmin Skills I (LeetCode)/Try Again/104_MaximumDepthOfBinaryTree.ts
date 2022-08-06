//https://leetcode.com/problems/maximum-depth-of-binary-tree/
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

function maxDepth(root: TreeNode | null, depth = 0): number {
  return recursiveMaxDepth(root, depth)
  return nonRecursiveMaxDepth(root)
}

//Recursive
function recursiveMaxDepth(root: TreeNode | null, depth = 0): number {
  if (!root) return depth
  depth++
  return Math.max(maxDepth(root.left, depth), maxDepth(root.right, depth))
}

//Non-Recursive
function nonRecursiveMaxDepth(root: TreeNode | null): number {
  if (!root) return 0

  const queue = [root]
  let depth = 0

  while (queue.length !== 0) {
    depth++
    const len = queue.length
    for (let i = 0; i < len; i++) {
      if (queue[i].left) queue.push(queue[i].left)
      if (queue[i].right) queue.push(queue[i].right)
    }
    queue.splice(0, len)
  }

  return depth
}
