//https://leetcode.com/problems/same-tree/
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  return recursiveIsSameTree(p, q)
  return iterativeIsSameTree(p, q)
}

function recursiveIsSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true
  if (!p || !q || p.val !== q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

function iterativeIsSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const queue = [p, q]

  while (queue.length > 0) {
    const first = queue.shift()
    const second = queue.shift()

    if (!first && !second) continue
    if (!first || !second || first.val !== second.val) return false

    queue.push(first.left)
    queue.push(second.left)
    queue.push(first.right)
    queue.push(second.right)
  }

  return true
}

console.log(isSameTree([1, 2, 3], [1, 2, 3]))
console.log(isSameTree([1, 2], [1, null, 2]))
