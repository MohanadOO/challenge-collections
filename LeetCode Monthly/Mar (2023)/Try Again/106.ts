//https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal

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

// Solution => https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/solutions/491447/javascript-solution
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  let hash = {}
  for (let i = 0; i < inorder.length; i++) {
    hash[inorder[i]] = i
  }

  function recur(start: number, end: number): TreeNode | null {
    if (start > end) return null
    let val = postorder.pop() as number
    let node = new TreeNode(val)
    node.right = recur(hash[val] + 1, end)
    node.left = recur(start, hash[val] - 1)
    return node
  }

  return recur(0, inorder.length - 1)
}
