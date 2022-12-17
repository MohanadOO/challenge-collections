//https://leetcode.com/problems/count-complete-tree-nodes/?envType=study-plan&id=binary-search-ii

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

function countNodes(root: TreeNode | null): number {
    if (!root || root.val === undefined) return 0
    
    function count(node: TreeNode | null, total: number): number {
        if (!node || node.val === undefined) return total
        
        total = total + 1

        total += count(node.left, 0)
        total += count(node.right, 0)

        return total
    }

    let total = 1
    total += count(root.left, 0)
    total += count(root.right, 0)

    return total
}
