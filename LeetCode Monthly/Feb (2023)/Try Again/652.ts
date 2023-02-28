//https://leetcode.com/problems/find-duplicate-subtrees
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

// Example => [1,2,3,4,null,2,4,null,null,4]
// Solution => https://leetcode.com/problems/find-duplicate-subtrees/solutions/867469/javascript-postorder-dfs
function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  function dfs(
    root: TreeNode | null,
    map: Map<any, any>,
    res: number[][]
  ): string {
    if (!root) return '#'

    const subTree = `${root.val}.${dfs(root.left, map, res)}.${dfs(
      root.right,
      map,
      res
    )}` // 1.2.4.###.3.2.4.###4.## , 2.4.### , 4.##, 3.2.4###4.## , 2.4### , 4.## , 4.##
    map.set(subTree, (map.get(subTree) || 0) + 1) // (4.##, 1), (2.4.###, 1), (1.2.4.###), (4.##, 2), (2.4.###, 2), (4.##, 3), (3.2.4.###4.##, 1), (1.2.4.###.3.2.4.###4.##, 1)
    if (map.get(subTree) === 2) {
      res.push(root) // ([[4]], [[4], [2,4]])
    }
    return subTree
  }

  const map = new Map()
  const res: number[][] = []
  dfs(root, map, res)
  return res
}
