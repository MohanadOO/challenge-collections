//https://leetcode.com/problems/n-ary-tree-level-order-traversal/
//Medium

/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

//Breadth First Search (BFS) Method
//Traverse The Tree by depth and extract child nodes value on each level
//Recursive solution O(n)
function levelOrder(root: Node | null): number[][] {
  const result: number[][] = []
  BFS(root, 0)
  return result

  function BFS(node: Node | null, depth: number) {
    if (!node) return
    if (depth === result.length) result.push([])

    result[depth].push(node.val)

    for (let i = 0; i < node.children.length; i++) {
      BFS(node.children[i], depth + 1)
    }
  }
}

console.log(levelOrder([1, null, 4, 5, 6, null, 5, 6]))
